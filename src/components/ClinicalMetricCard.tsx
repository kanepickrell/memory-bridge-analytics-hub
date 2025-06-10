
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClinicalMetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  threshold?: number;
  currentProgress?: number;
  status?: 'normal' | 'warning' | 'critical';
  icon?: React.ComponentType<{ className?: string }>;
  researchContext?: string;
  isLive?: boolean;
}

const ClinicalMetricCard: React.FC<ClinicalMetricCardProps> = ({
  title,
  value,
  unit,
  trend,
  threshold,
  currentProgress,
  status = 'normal',
  icon: Icon,
  researchContext,
  isLive = false
}) => {
  const statusStyles = {
    normal: "border-gray-200",
    warning: "border-l-4 border-l-amber-500 bg-amber-50/20",
    critical: "border-l-4 border-l-red-500 bg-red-50/20"
  };

  const trendColors = {
    up: "text-green-600",
    down: "text-red-600", 
    stable: "text-gray-600"
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card className={cn(
      "hover:shadow-md transition-all duration-200 relative overflow-hidden",
      statusStyles[status]
    )}>
      {isLive && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200">
          <div className="h-full bg-blue-500 animate-pulse w-full" />
        </div>
      )}
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-blue-600" />}
          {isLive && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-600">Live</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-baseline gap-2 mb-2">
          <div className="text-3xl font-bold font-mono">{value}</div>
          {unit && <div className="text-sm text-muted-foreground">{unit}</div>}
          {trend && (
            <div className={cn("flex items-center gap-1 text-xs", trendColors[trend])}>
              <TrendIcon className="h-3 w-3" />
              <span className="capitalize">{trend}</span>
            </div>
          )}
        </div>
        
        {currentProgress !== undefined && (
          <div className="space-y-2">
            <div className="relative">
              <Progress value={currentProgress} className="h-3" />
              {threshold && (
                <div 
                  className="absolute top-0 w-0.5 h-3 bg-red-500" 
                  style={{ left: `${threshold}%` }}
                />
              )}
            </div>
            <div className="flex justify-between text-xs">
              <span>0</span>
              {threshold && (
                <span className="text-red-500 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  Threshold: {threshold}%
                </span>
              )}
              <span>100</span>
            </div>
          </div>
        )}
        
        {status !== 'normal' && (
          <Badge 
            variant={status === 'critical' ? 'destructive' : 'secondary'}
            className="mt-2"
          >
            {status === 'critical' ? 'Immediate Attention' : 'Monitor Closely'}
          </Badge>
        )}
        
        {researchContext && (
          <p className="text-xs text-muted-foreground mt-2 italic">
            Research: {researchContext}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ClinicalMetricCard;
