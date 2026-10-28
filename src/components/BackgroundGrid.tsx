import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Dynamic CSS Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Subtle Radial Vignette to focus attention on content */}
      <div 
        className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-white/40 dark:to-[#0B0B0B]/80"
      />
    </div>
  );
};

