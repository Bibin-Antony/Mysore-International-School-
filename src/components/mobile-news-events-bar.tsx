"use client";

interface MobileNewsEventsBarProps {
  onClick: () => void;
}

const MobileNewsEventsBar = ({ onClick }: MobileNewsEventsBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <button 
        onClick={onClick}
        className="w-full bg-secondary hover:bg-secondary/90 transition-colors"
      >
        <div className="flex items-center justify-center h-12 px-4">
          <span className="font-display font-bold text-primary text-sm tracking-[2px] uppercase">
            NEWS & EVENTS
          </span>
        </div>
      </button>
    </div>
  );
};

export default MobileNewsEventsBar;
