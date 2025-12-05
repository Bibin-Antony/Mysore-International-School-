"use client";

import { useState } from "react";
import MobileNewsEventsBar from "./mobile-news-events-bar";
import NewsEventsSidebar from "./sections/news-events-sidebar";

const MobileNewsEventsWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileNewsEventsBar onClick={() => setIsSidebarOpen(true)} />
      <NewsEventsSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
};

export default MobileNewsEventsWrapper;
