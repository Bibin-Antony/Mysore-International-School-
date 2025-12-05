import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import MobileNewsEventsWrapper from "@/components/mobile-news-events-wrapper";
import NewsEventsTab from "@/components/NewsEventsTab";

export const metadata: Metadata = {
  title: "Mysore International School - Excellence in Education",
  description: "Mysore International School nurtures empathetic and innovative global citizens through world-class education, fostering academic excellence and holistic development in Mysore, Karnataka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <NewsEventsTab />
        <MobileNewsEventsWrapper />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
