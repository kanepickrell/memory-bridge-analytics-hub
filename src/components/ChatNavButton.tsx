
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ChatNavButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
    >
      <Button
        onClick={() => navigate("/chat")}
        size="lg"
        className="rounded-full h-16 w-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <Sparkles className="h-3 w-3 text-yellow-300" />
          </motion.div>
        </div>
      </Button>
      
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        Talk to Remi
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </motion.div>
    </motion.div>
  );
};

export default ChatNavButton;
