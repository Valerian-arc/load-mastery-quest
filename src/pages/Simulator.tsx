import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, MapPin, Clock, Truck, Star } from "lucide-react";

const Simulator = () => {
  const scenarios = [
    {
      id: 1,
      title: "Rush Hour Challenge",
      description: "Navigate through peak traffic to deliver time-sensitive cargo",
      difficulty: "Medium",
      duration: "15 min",
      points: 300,
      unlocked: true
    },
    {
      id: 2,
      title: "Weather Emergency",
      description: "Adapt routes during severe weather conditions",
      difficulty: "Hard",
      duration: "20 min", 
      points: 500,
      unlocked: true
    },
    {
      id: 3,
      title: "Multi-Stop Optimization",
      description: "Plan efficient routes for multiple deliveries",
      difficulty: "Expert",
      duration: "30 min",
      points: 750,
      unlocked: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-freight-success";
      case "Medium": return "bg-freight-warning";
      case "Hard": return "bg-freight-orange";
      case "Expert": return "bg-freight-danger";
      default: return "bg-muted";
    }
  };

  return (
    <AppLayout currentPage="simulator">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-freight-navy">Dispatch Simulator</h1>
          <p className="text-muted-foreground">Practice real-world scenarios in a safe environment</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-freight-orange">12</div>
              <div className="text-sm text-muted-foreground">Scenarios Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-freight-navy">4,250</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Simulation */}
        <Card className="border-freight-orange">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-freight-orange" />
              Start New Simulation
            </CardTitle>
            <CardDescription>
              Choose a scenario to practice your dispatching skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scenarios.map((scenario) => (
                <Card key={scenario.id} className={`relative ${!scenario.unlocked ? 'opacity-50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{scenario.title}</CardTitle>
                        <CardDescription>{scenario.description}</CardDescription>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${getDifficultyColor(scenario.difficulty)} text-white`}
                      >
                        {scenario.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {scenario.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {scenario.points} points
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      disabled={!scenario.unlocked}
                      variant={scenario.unlocked ? "default" : "secondary"}
                    >
                      <Truck className="h-4 w-4 mr-2" />
                      {scenario.unlocked ? "Start Simulation" : "Complete Training to Unlock"}
                    </Button>
                  </CardContent>
                  
                  {!scenario.unlocked && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg" />
                  )}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-freight-orange" />
              Recent Simulations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Rush Hour Challenge</p>
                  <p className="text-sm text-muted-foreground">Completed 2 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-freight-success">+300 pts</p>
                  <p className="text-sm text-muted-foreground">95% accuracy</p>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Basic Route Planning</p>
                  <p className="text-sm text-muted-foreground">Completed yesterday</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-freight-success">+250 pts</p>
                  <p className="text-sm text-muted-foreground">88% accuracy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Simulator;