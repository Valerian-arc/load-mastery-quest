import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Star, Play, Map, CheckCircle } from "lucide-react";
import { trainingModules } from "@/data/trainingContent";
import TrainingModuleViewer from "@/components/training/TrainingModuleViewer";
import StateMap from "@/components/training/StateMap";
import { useToast } from "@/hooks/use-toast";

const Training = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<number[]>([1]); // Module 1 starts completed
  const [moduleProgress, setModuleProgress] = useState<Record<number, number>>({
    1: 100,
    2: 75,
    3: 0,
    4: 0,
    5: 0
  });
  const { toast } = useToast();

  const handleModuleComplete = (moduleId: number) => {
    setCompletedModules([...completedModules, moduleId]);
    setModuleProgress(prev => ({ ...prev, [moduleId]: 100 }));
    setSelectedModule(null);
    
    toast({
      title: "Module Completed!",
      description: `You've successfully completed the training module and earned points!`,
    });
  };

  const getModuleStatus = (moduleId: number) => {
    if (completedModules.includes(moduleId)) return "completed";
    if (moduleProgress[moduleId] > 0) return "in-progress";
    if (moduleId === 1 || completedModules.includes(moduleId - 1)) return "available";
    return "locked";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-freight-success";
      case "in-progress": return "bg-freight-warning";
      case "available": return "bg-freight-orange";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "available": return "Available";
      default: return "Locked";
    }
  };

  const totalPoints = trainingModules.reduce((sum, module) => {
    return sum + (completedModules.includes(module.id) ? module.points : 0);
  }, 0);

  const maxPoints = trainingModules.reduce((sum, module) => sum + module.points, 0);
  const completedCount = completedModules.length;
  const overallProgress = (completedCount / trainingModules.length) * 100;

  if (selectedModule) {
    const module = trainingModules.find(m => m.id === selectedModule);
    if (module) {
      return (
        <AppLayout currentPage="training">
          <div className="p-6">
            <TrainingModuleViewer
              module={module}
              onComplete={() => handleModuleComplete(module.id)}
              onBack={() => setSelectedModule(null)}
            />
          </div>
        </AppLayout>
      );
    }
  }

  return (
    <AppLayout currentPage="training">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-freight-navy">Freight Dispatch Training</h1>
          <p className="text-muted-foreground">Master essential dispatching skills with interactive modules</p>
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
                <span>{completedCount} of {trainingModules.length} modules completed</span>
                <span>{totalPoints} / {maxPoints} points</span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Training Content Tabs */}
        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Training Modules
            </TabsTrigger>
            <TabsTrigger value="states" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              State Abbreviations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4 mt-6">
            {trainingModules.map((module) => {
              const status = getModuleStatus(module.id);
              const progress = moduleProgress[module.id] || 0;
              
              return (
                <Card key={module.id} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {completedModules.includes(module.id) && (
                            <CheckCircle className="h-5 w-5 text-freight-success" />
                          )}
                          {module.title}
                        </CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(status)} text-white`}
                      >
                        {getStatusText(status)}
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
                    
                    {progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    )}

                    <Button 
                      className="w-full" 
                      disabled={status === "locked"}
                      variant={status === "completed" ? "secondary" : "default"}
                      onClick={() => status !== "locked" && setSelectedModule(module.id)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {status === "completed" ? "Review" : status === "in-progress" ? "Continue" : "Start"}
                    </Button>
                  </CardContent>
                  
                  {status === "locked" && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <p className="text-muted-foreground font-medium">
                        Complete previous modules to unlock
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="states" className="mt-6">
            <StateMap />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Training;