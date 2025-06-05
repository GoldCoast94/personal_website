"use client";
import React from "react";

interface CometLoadingProps {
  size?: number;
  className?: string;
}

const CometLoading: React.FC<CometLoadingProps> = ({
  size = 160,
  className = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 border border-gray-700 rounded-full opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
        <span className="animate-pulse">loading</span>
        <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
          .
        </span>
        <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
          .
        </span>
        <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
          .
        </span>
      </div>
      <div className="absolute inset-0 animate-spin">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="absolute w-2 h-2 bg-white rounded-full blur-[1px] top-0 left-0"></div>
          <div className="absolute w-3 h-3 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-[2px] opacity-80 top-0 left-0"></div>
          <div className="absolute w-24 h-12 bg-gradient-to-r from-blue-500/70 via-purple-500/30 to-transparent transform -rotate-45 origin-top-left blur-xl top-0 left-0"></div>
          <div className="absolute w-28 h-10 bg-gradient-to-r from-purple-500/60 via-pink-500/20 to-transparent transform -rotate-45 origin-top-left blur-lg"></div>
          <div className="absolute w-32 h-8 bg-gradient-to-r from-pink-500/50 via-red-500/10 to-transparent transform -rotate-45 origin-top-left blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CometLoading;
