
import React from "react";
import { motion } from "framer-motion";

interface ChatAvatarProps {
  isRecording?: boolean;
  size?: "sm" | "lg";
}

const ChatAvatar = ({ isRecording = false, size = "sm" }: ChatAvatarProps) => {
  const avatarVariants = {
    idle: { 
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8]
    },
    talking: { 
      scale: [1, 1.1, 1.05, 1],
      opacity: [1, 0.9, 1, 0.95]
    },
    listening: {
      scale: [1, 1.08, 1],
      boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 20px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0.4)"]
    }
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    lg: "w-32 h-32"
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center overflow-hidden ${size === 'lg' ? 'shadow-lg' : ''}`}
      animate={isRecording ? "listening" : "idle"}
      variants={avatarVariants}
      transition={{ 
        duration: isRecording ? 1.5 : 2,
        repeat: Infinity,
        ease: "easeInOut" 
      }}
    >
      <img 
        src="/lovable-uploads/120ba35d-cf73-4d55-a86c-cd2e7b8deca0.png" 
        alt="Remi Avatar" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ChatAvatar;
