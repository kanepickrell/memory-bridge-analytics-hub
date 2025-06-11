
import React from "react";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: {
    id: number;
    text: string;
    isUser: boolean;
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          message.isUser
            ? 'bg-blue-500 text-white rounded-br-sm'
            : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
