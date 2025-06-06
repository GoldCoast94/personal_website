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
          <div className="absolute w-2 h-2 bg-white rounded-full blur-[1px] top-0 left-0 opacity-90"></div>
          <div className="absolute w-3 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-[2px] opacity-90 top-0 left-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CometLoading;
