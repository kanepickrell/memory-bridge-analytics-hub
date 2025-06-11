
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ChatWelcomeScreen from "@/components/chat/ChatWelcomeScreen";
import ChatActiveSession from "@/components/chat/ChatActiveSession";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatPage = () => {
  const navigate = useNavigate();
  const [sessionActive, setSessionActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([]);
  const recordStartRef = useRef<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Main chat interface variants
  const chatVariants = {
    inactive: { 
      scale: 0.8,
      borderRadius: 20,
      background: "linear-gradient(135deg, #E8F5E8 0%, #D4EDDA 100%)"
    },
    active: { 
      scale: 1,
      borderRadius: 24,
      background: "linear-gradient(135deg, #E8F5E8 0%, #C3E9DB 100%)"
    },
  };

  const handleStartSession = () => {
    setSessionActive(true);
    setConversation([{
      id: 1,
      text: "Hi! I'm Remi, your memory companion. I'm here to help you explore and share your memories. What would you like to talk about today?",
      isUser: false
    }]);
  };

  const handleEndSession = () => {
    setSessionActive(false);
    setIsRecording(false);
    setConversation([]);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const audioChunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        handleAudioUpload(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      recordStartRef.current = Date.now();
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      const duration = Date.now() - recordStartRef.current;
      if (duration < 500) {
        console.warn("Recording too short, ignoring...");
        return;
      }
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleAudioUpload = async (audioBlob: Blob) => {
    // Simulate processing and response
    const userMessage = "I recorded something..."; // In real implementation, this would be transcribed
    
    setConversation(prev => [...prev, {
      id: prev.length + 1,
      text: userMessage,
      isUser: true
    }]);

    // Simulate Remi's response
    setTimeout(() => {
      const responses = [
        "That's a wonderful memory! Can you tell me more about how that made you feel?",
        "I love hearing about that. What other details do you remember from that time?",
        "Thank you for sharing that with me. What was the most meaningful part of that experience?",
        "That sounds very special. Are there other memories from that period that come to mind?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setConversation(prev => [...prev, {
        id: prev.length + 1,
        text: randomResponse,
        isUser: false
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:bg-white/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Talk to Remi</h1>
          <p className="text-sm text-gray-600">Your AI Memory Companion</p>
        </div>
        
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          className="relative w-full max-w-2xl h-[600px] shadow-2xl overflow-hidden"
          animate={sessionActive ? "active" : "inactive"}
          variants={chatVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {!sessionActive ? (
              <ChatWelcomeScreen onStartSession={handleStartSession} />
            ) : (
              <ChatActiveSession
                conversation={conversation}
                isRecording={isRecording}
                isMuted={isMuted}
                onToggleMute={() => setIsMuted(!isMuted)}
                onEndSession={handleEndSession}
                onStartRecording={startRecording}
                onStopRecording={stopRecording}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;
