
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import ChatAvatar from "./ChatAvatar";
import ChatMessage from "./ChatMessage";
import RecordingButton from "./RecordingButton";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatActiveSessionProps {
  conversation: Message[];
  isRecording: boolean;
  isMuted: boolean;
  onToggleMute: () => void;
  onEndSession: () => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

const ChatActiveSession = ({ 
  conversation, 
  isRecording, 
  isMuted, 
  onToggleMute, 
  onEndSession, 
  onStartRecording, 
  onStopRecording 
}: ChatActiveSessionProps) => {
  return (
    <motion.div
      key="chat"
      className="h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-green-200 bg-white/50">
        <div className="flex items-center gap-3">
          <ChatAvatar isRecording={isRecording} />
          <div>
            <h3 className="font-semibold text-gray-800">Remi</h3>
            <p className="text-xs text-gray-600">
              {isRecording ? "Listening..." : "Online"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleMute}
            className="w-8 h-8 p-0"
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEndSession}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            End
          </Button>
        </div>
      </div>

      {/* Conversation Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversation.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      {/* Recording Interface */}
      <RecordingButton
        isRecording={isRecording}
        onMouseDown={onStartRecording}
        onMouseUp={onStopRecording}
        onMouseLeave={onStopRecording}
      />
    </motion.div>
  );
};

export default ChatActiveSession;
