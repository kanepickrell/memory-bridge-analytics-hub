
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const [sessionActive, setSessionActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const recordStartRef = useRef<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Circle variants for morphing
  const circleVariants = {
    inactive: { 
      width: 400, 
      height: 200, 
      borderRadius: 16,
      background: "linear-gradient(135deg, #E8F5E8 0%, #D4EDDA 100%)"
    },
    active: { 
      width: 450, 
      height: 450, 
      borderRadius: "50%",
      background: "linear-gradient(135deg, #E8F5E8 0%, #C3E9DB 100%)"
    },
  };

  // Talking pulse animation
  const pulseVariants = {
    idle: { 
      scale: 1,
      opacity: 0.8
    },
    talking: { 
      scale: [1, 1.3, 1],
      opacity: [0.8, 1, 0.8]
    },
    recording: {
      scale: [1, 1.2, 1],
      boxShadow: [
        "0 0 0 0 rgba(34, 197, 94, 0.4)", 
        "0 0 0 20px rgba(34, 197, 94, 0)", 
        "0 0 0 0 rgba(34, 197, 94, 0.4)"
      ]
    }
  };

  const handleStartSession = () => {
    setSessionActive(true);
    // Simulate Remi speaking
    setIsTalking(true);
    setTimeout(() => setIsTalking(false), 3000);
  };

  const handleEndSession = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSessionActive(false);
    setIsRecording(false);
    setIsTalking(false);
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
    // Simulate processing and Remi responding
    setIsTalking(true);
    setTimeout(() => setIsTalking(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex flex-col">
      {/* Simple Header */}
      <div className="flex items-center justify-start p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:bg-white/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>

      {/* Main Interface - Centered Circle */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          className="relative flex items-center justify-center shadow-2xl cursor-pointer"
          animate={sessionActive ? "active" : "inactive"}
          variants={circleVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={!sessionActive ? handleStartSession : undefined}
        >
          <AnimatePresence mode="wait">
            {!sessionActive ? (
              <motion.div
                key="start"
                className="flex items-center justify-center text-2xl font-semibold text-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                Start Session
              </motion.div>
            ) : (
              <motion.div
                key="session"
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Central Talking Indicator */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
                  animate={isTalking ? "talking" : isRecording ? "recording" : "idle"}
                  variants={pulseVariants}
                  transition={{ 
                    duration: isTalking ? 1.2 : isRecording ? 1.5 : 2,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-4xl">🤖</span>
                </motion.div>

                {/* End Session Button */}
                <motion.button
                  className="absolute top-8 right-8 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-sm font-medium"
                  onClick={handleEndSession}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  End Session
                </motion.button>

                {/* Recording Button */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-medium transition-all ${
                      isRecording 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    onMouseLeave={stopRecording}
                    animate={isRecording ? { 
                      boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 15px rgba(59, 130, 246, 0)"] 
                    } : {}}
                    transition={{ duration: 1, repeat: isRecording ? Infinity : 0 }}
                  >
                    <Mic className="h-8 w-8" />
                  </motion.button>
                  <p className="text-center text-sm text-gray-600 mt-3">
                    {isRecording ? "Release to send" : "Hold to record"}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPage;
