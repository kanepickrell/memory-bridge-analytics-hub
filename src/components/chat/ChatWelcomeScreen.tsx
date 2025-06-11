
import React from "react";
import { motion } from "framer-motion";
import ChatAvatar from "./ChatAvatar";

interface ChatWelcomeScreenProps {
  onStartSession: () => void;
}

const ChatWelcomeScreen = ({ onStartSession }: ChatWelcomeScreenProps) => {
  return (
    <motion.div
      key="welcome"
      className="h-full flex flex-col items-center justify-center p-8 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onClick={onStartSession}
    >
      <div className="mb-6">
        <ChatAvatar size="lg" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Remi</h2>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-md">
        Your personal memory companion, ready to listen and help you explore your cherished memories.
      </p>
      <div className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors">
        Start Conversation
      </div>
    </motion.div>
  );
};

export default ChatWelcomeScreen;
