import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, MicOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SessionReview from "@/components/chat/SessionReview";

const ChatPage = () => {
    const navigate = useNavigate();
    const [sessionActive, setSessionActive] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [conversation, setConversation] = useState<Array<{ id: number, text: string, isUser: boolean }>>([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [sessionStartTime, setSessionStartTime] = useState<number>(0);
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

    // Remi avatar breathing animation
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

    const handleStartSession = () => {
        setSessionActive(true);
        setShowReview(false);
        setSessionStartTime(Date.now());
        setConversation([{
            id: 1,
            text: "Hi! I'm Remi, your memory companion. I'm here to help you explore and share your memories. What would you like to talk about today?",
            isUser: false
        }]);
    };

    const handleEndSession = () => {
        setSessionActive(false);
        setIsRecording(false);
        setCurrentMessage("");
        
        // Calculate session data
        const duration = Math.round((Date.now() - sessionStartTime) / 1000 / 60);
        
        // Show review instead of going back to welcome
        setShowReview(true);
    };

    const generateSessionData = () => {
        const duration = Math.round((Date.now() - sessionStartTime) / 1000 / 60);
        const memoriesShared = Math.max(1, Math.floor(conversation.filter(msg => msg.isUser).length / 2));
        
        const themes = [
            "You explored wonderful childhood memories today",
            "Family connections were a beautiful theme in our conversation", 
            "You shared some truly heartwarming stories",
            "Your memories about special places came alive today"
        ];
        
        const engagementLevels = ["Very Engaged", "Deeply Reflective", "Wonderfully Open"];
        
        return {
            duration: `${duration} minutes`,
            memoriesShared,
            engagementLevel: engagementLevels[Math.floor(Math.random() * engagementLevels.length)],
            keyTheme: themes[Math.floor(Math.random() * themes.length)]
        };
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
        const userMessage = "I recorded something...";

        setConversation(prev => [...prev, {
            id: prev.length + 1,
            text: userMessage,
            isUser: true
        }]);

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

                <div className="w-24"></div>
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
                        {showReview ? (
                            <SessionReview
                                onStartNewSession={handleStartSession}
                                sessionData={generateSessionData()}
                            />
                        ) : !sessionActive ? (
                            <motion.div
                                key="welcome"
                                className="h-full flex flex-col items-center justify-center p-8 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                onClick={handleStartSession}
                            >
                                <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                                    <img
                                        src="/lovable-uploads/120ba35d-cf73-4d55-a86c-cd2e7b8deca0.png"
                                        alt="Remi Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Remi</h2>
                                <p className="text-lg text-gray-600 text-center mb-6 max-w-md">
                                    Your personal memory companion, ready to listen and help you explore your cherished memories.
                                </p>
                                <div className="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors">
                                    Start Conversation
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                className="h-full flex flex-col"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center justify-between p-4 border-b border-green-200 bg-white/50">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
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
                                            onClick={() => setIsMuted(!isMuted)}
                                            className="w-8 h-8 p-0"
                                        >
                                            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={handleEndSession}
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                        >
                                            End
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {conversation.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                                                    ? 'bg-blue-500 text-white rounded-br-sm'
                                                    : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                                                    }`}
                                            >
                                                <p className="text-sm">{message.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="p-4 bg-white/70 border-t border-green-200">
                                    <div className="flex items-center justify-center">
                                        <motion.button
                                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-medium transition-all ${isRecording
                                                ? 'bg-red-500 hover:bg-red-600'
                                                : 'bg-green-500 hover:bg-green-600'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onMouseDown={startRecording}
                                            onMouseUp={stopRecording}
                                            onMouseLeave={stopRecording}
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default ChatPage;
