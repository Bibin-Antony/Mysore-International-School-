export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import NewsEvent from "@/lib/models/NewsEvent";
import { uploadImage } from "@/lib/uploadToCloudinary";

// GET all news/events
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const status = searchParams.get("status");

    const filter: any = {};
    
    // Only filter by status if it's not "all"
    if (status && status !== "all") {
      filter.status = status;
    }
    
    if (type === "news" || type === "event") {
      filter.type = type;
    }

    const items = await NewsEvent.find(filter).sort({ date: -1 }).lean();

    return NextResponse.json(
      { success: true, data: items },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /news-events error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST create news/event
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();

    const type = formData.get("type") as string;
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const fullContent = formData.get("fullContent") as string;
    const date = formData.get("date") as string;

    const rawTime = formData.get("time");
    const rawLocation = formData.get("location");

    const time =
      rawTime && rawTime !== "null" && rawTime !== ""
        ? String(rawTime)
        : undefined;

    const location =
      rawLocation && rawLocation !== "null" && rawLocation !== ""
        ? String(rawLocation)
        : undefined;

    const status = formData.get("status") as string;
    const image = formData.get("image") as File;

    if (!type || !title || !excerpt || !fullContent || !date || !image) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Use the same upload method as Event Gallery
    const uploadResult = await uploadImage(image, "news-events");

    const newItem = await NewsEvent.create({
      type,
      title,
      excerpt,
      fullContent,
      imageUrl: uploadResult.url,
      date: new Date(date),
      time,
      location,
      status: status || "published",
    });

    return NextResponse.json(
      {
        success: true,
        message: `${type === "news" ? "News" : "Event"} created successfully`,
        data: newItem,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /news-events error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create news/event" },
      { status: 500 }
    );
  }
}