import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Truck, BookOpen, Gamepad2, TrendingUp, Star, Play, Award } from "lucide-react";

const Index = () => {
  const quickStats = [
    { label: "Training Progress", value: "50%", icon: BookOpen, color: "text-freight-orange" },
    { label: "Total Points", value: "2,450", icon: Star, color: "text-freight-navy" },
    { label: "Global Rank", value: "#3", icon: TrendingUp, color: "text-freight-success" },
    { label: "Badges Earned", value: "6", icon: Award, color: "text-freight-warning" }
  ];

  const recentAchievements = [
    { title: "Quick Learner", description: "Completed 3 modules in one day", points: 250 },
    { title: "First Steps", description: "Completed your first training module", points: 100 }
  ];

  return (
    <AppLayout currentPage="home">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Truck className="h-8 w-8 text-freight-orange" />
            <h1 className="text-3xl font-bold text-freight-navy">Load Mastery Quest</h1>
          </div>
          <p className="text-muted-foreground">Master the art of freight dispatching</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-muted rounded-lg ${stat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Continue Learning */}
        <Card className="border-freight-orange">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-freight-orange" />
              Continue Learning
            </CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Load Planning & Weight Distribution</span>
                <span className="text-sm text-muted-foreground">75% complete</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <Button className="w-full">
              <Play className="h-4 w-4 mr-2" />
              Continue Module
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center space-y-3">
                <div className="p-3 bg-freight-navy/10 rounded-full w-fit mx-auto">
                  <Gamepad2 className="h-6 w-6 text-freight-navy" />
                </div>
                <div>
                  <div className="font-medium">Start Simulation</div>
                  <div className="text-xs text-muted-foreground">Practice scenarios</div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Launch
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center space-y-3">
                <div className="p-3 bg-freight-orange/10 rounded-full w-fit mx-auto">
                  <TrendingUp className="h-6 w-6 text-freight-orange" />
                </div>
                <div>
                  <div className="font-medium">View Progress</div>
                  <div className="text-xs text-muted-foreground">Track your growth</div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-freight-orange" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-freight-success/10 rounded-lg border border-freight-success/20">
                  <div className="p-2 bg-freight-success rounded-full">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                  <div className="text-sm font-medium text-freight-success">+{achievement.points} pts</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
