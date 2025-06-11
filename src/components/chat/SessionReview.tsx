
import React from "react";
import { motion } from "framer-motion";
import { Clock, Heart, MessageCircle, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SessionReviewProps {
  onStartNewSession: () => void;
  sessionData: {
    duration: string;
    memoriesShared: number;
    engagementLevel: string;
    keyTheme: string;
  };
}

const SessionReview = ({ onStartNewSession, sessionData }: SessionReviewProps) => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Clock,
      label: "Session Duration",
      value: sessionData.duration,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      label: "Memories Shared",
      value: `${sessionData.memoriesShared} memories`,
      color: "text-rose-600", 
      bgColor: "bg-rose-50"
    },
    {
      icon: MessageCircle,
      label: "Engagement",
      value: sessionData.engagementLevel,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <motion.div
      key="session-review"
      className="h-full flex flex-col p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Return to Dashboard Button */}
      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:bg-white/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Dashboard
        </Button>
      </motion.div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Session Complete Message */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Session Complete!</h2>
          <p className="text-gray-600 text-sm max-w-md">
            Thank you for sharing your memories with me today. Here's what we discovered together:
          </p>
        </motion.div>

        {/* Stats Grid with Glassmorphism */}
        <motion.div 
          className="grid grid-cols-1 gap-4 w-full max-w-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="backdrop-blur-sm bg-white/70 rounded-2xl p-4 border border-white/20 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Theme Insight with Gradient Card */}
        <motion.div
          className="w-full max-w-md mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5 border border-blue-100 shadow-lg">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Today's Journey</h3>
              <p className="text-sm text-gray-600 italic">
                "{sessionData.keyTheme}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subtle Progress Indicator */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-xs text-gray-500">
            Session automatically saved to your memory journal
          </p>
          <div className="w-16 h-1 bg-green-200 rounded-full mx-auto mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SessionReview;
