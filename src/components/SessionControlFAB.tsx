
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Square, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SessionControlFABProps {
  isActive: boolean;
  onToggle: () => void;
}

const SessionControlFAB: React.FC<SessionControlFABProps> = ({ isActive, onToggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onToggle}
        size="lg"
        className={cn(
          "rounded-full h-16 w-16 shadow-lg transition-all duration-300 hover:scale-105",
          isActive 
            ? "bg-red-500 hover:bg-red-600 animate-pulse" 
            : "bg-blue-500 hover:bg-blue-600"
        )}
      >
        {isActive ? (
          <Square className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
      
      {isActive && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Activity className="h-3 w-3" />
            Recording
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionControlFAB;
