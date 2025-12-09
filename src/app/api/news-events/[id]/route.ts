export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import NewsEvent from "@/lib/models/NewsEvent";
import { uploadImage } from "@/lib/uploadToCloudinary";

// GET one
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const item = await NewsEvent.findById(params.id);

    if (!item) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: item }, { status: 200 });
  } catch (error) {
    console.error("GET /news-events/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch item" },
      { status: 500 }
    );
  }
}

// PUT update
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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
    const image = formData.get("image") as File | null;

    const updateData: any = {
      type,
      title,
      excerpt,
      fullContent,
      date: new Date(date),
      time,
      location,
      status,
    };

    // ✅ Use the same upload method as Event Gallery
    if (image) {
      const uploadResult = await uploadImage(image, "news-events");
      updateData.imageUrl = uploadResult.url;
    }

    const updated = await NewsEvent.findByIdAndUpdate(params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (error: any) {
    console.error("PUT /news-events/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update item" },
      { status: 500 }
    );
  }
}

// DELETE
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const deleted = await NewsEvent.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Deleted" });
  } catch (error) {
    console.error("DELETE /news-events/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete" },
      { status: 500 }
    );
  }
}