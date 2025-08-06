import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star, Play } from "lucide-react";

const Training = () => {
  const modules = [
    {
      id: 1,
      title: "DOT Regulations Fundamentals",
      description: "Learn essential Department of Transportation regulations",
      duration: "45 min",
      progress: 100,
      status: "completed",
      points: 250
    },
    {
      id: 2,
      title: "Load Planning & Weight Distribution",
      description: "Master the art of efficient load planning",
      duration: "60 min",
      progress: 75,
      status: "in-progress",
      points: 300
    },
    {
      id: 3,
      title: "Route Optimization Strategies",
      description: "Advanced techniques for optimal routing",
      duration: "90 min",
      progress: 0,
      status: "locked",
      points: 400
    },
    {
      id: 4,
      title: "Emergency Response Protocols",
      description: "Handle unexpected situations professionally",
      duration: "30 min",
      progress: 0,
      status: "locked",
      points: 200
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-freight-success";
      case "in-progress": return "bg-freight-warning";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      default: return "Locked";
    }
  };

  return (
    <AppLayout currentPage="training">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-freight-navy">Training Modules</h1>
          <p className="text-muted-foreground">Master freight dispatching skills step by step</p>
        </div>

        {/* Overall Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-freight-orange" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>2 of 4 modules completed</span>
                <span>850 / 1150 points</span>
              </div>
              <Progress value={43.75} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <div className="space-y-4">
          {modules.map((module) => (
            <Card key={module.id} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getStatusColor(module.status)} text-white`}
                  >
                    {getStatusText(module.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {module.points} points
                  </div>
                </div>
                
                {module.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                )}

                <Button 
                  className="w-full" 
                  disabled={module.status === "locked"}
                  variant={module.status === "completed" ? "secondary" : "default"}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {module.status === "completed" ? "Review" : module.status === "in-progress" ? "Continue" : "Start"}
                </Button>
              </CardContent>
              
              {module.status === "locked" && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Training;