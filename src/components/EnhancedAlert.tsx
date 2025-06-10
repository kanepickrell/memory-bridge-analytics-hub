
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, AlertCircle, Info, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedAlertProps {
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  actionRequired?: string;
  timestamp?: string;
  onAction?: () => void;
}

const EnhancedAlert: React.FC<EnhancedAlertProps> = ({
  severity,
  title,
  description,
  actionRequired,
  timestamp,
  onAction
}) => {
  const alertStyles = {
    critical: "border-red-500 bg-red-50 text-red-900",
    warning: "border-amber-500 bg-amber-50 text-amber-900", 
    info: "border-blue-500 bg-blue-50 text-blue-900"
  };

  const IconComponent = {
    critical: AlertTriangle,
    warning: AlertCircle,
    info: Info
  }[severity];

  return (
    <Alert className={cn(alertStyles[severity], "relative")}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <AlertTitle className="flex items-center gap-2">
            <IconComponent className="h-4 w-4" />
            {title}
          </AlertTitle>
          <AlertDescription className="mt-1">{description}</AlertDescription>
          {actionRequired && (
            <div className="mt-3">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={onAction}
                className={severity === 'critical' ? 'border-red-500 text-red-700 hover:bg-red-50' : ''}
              >
                {actionRequired}
              </Button>
            </div>
          )}
        </div>
        {timestamp && (
          <Badge variant="outline" className="ml-4 shrink-0">
            {timestamp}
          </Badge>
        )}
      </div>
    </Alert>
  );
};

export default EnhancedAlert;
