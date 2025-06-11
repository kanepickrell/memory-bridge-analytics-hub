
import React from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

interface RecordingButtonProps {
  isRecording: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}

const RecordingButton = ({ 
  isRecording, 
  onMouseDown, 
  onMouseUp, 
  onMouseLeave 
}: RecordingButtonProps) => {
  return (
    <div className="p-4 bg-white/70 border-t border-green-200">
      <div className="flex items-center justify-center">
        <motion.button
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-medium transition-all ${
            isRecording 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-green-500 hover:bg-green-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          animate={isRecording ? { 
            boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.4)", "0 0 0 15px rgba(239, 68, 68, 0)"] 
          } : {}}
          transition={{ duration: 1, repeat: isRecording ? Infinity : 0 }}
        >
          <Mic className="h-6 w-6" />
        </motion.button>
      </div>
      <p className="text-center text-xs text-gray-600 mt-2">
        {isRecording ? "Release to send" : "Hold to record"}
      </p>
    </div>
  );
};

export default RecordingButton;
