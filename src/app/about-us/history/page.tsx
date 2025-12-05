'use client';

import React from 'react';
import TimelineSection from './TimelineSection';
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'

const HistoryPage = () => {
  return (
    <div className="bg-white">
      <HeaderNavigation />
ß      
      <TimelineSection />

      <Footer />
    </div>
  );
};

export default HistoryPage;
