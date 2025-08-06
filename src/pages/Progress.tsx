import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Clock, Star, Award } from "lucide-react";

const ProgressPage = () => {
  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first training module", earned: true, points: 100 },
    { id: 2, title: "Quick Learner", description: "Complete 3 modules in one day", earned: true, points: 250 },
    { id: 3, title: "Simulator Pro", description: "Perfect score on 5 simulations", earned: false, points: 500 },
    { id: 4, title: "Master Dispatcher", description: "Complete all training modules", earned: false, points: 1000 }
  ];

  const weeklyProgress = [
    { day: "Mon", modules: 2, simulations: 1 },
    { day: "Tue", modules: 1, simulations: 3 },
    { day: "Wed", modules: 3, simulations: 2 },
    { day: "Thu", modules: 1, simulations: 1 },
    { day: "Fri", modules: 2, simulations: 4 },
    { day: "Sat", modules: 0, simulations: 2 },
    { day: "Sun", modules: 1, simulations: 1 }
  ];

  return (
    <AppLayout currentPage="progress">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-freight-navy">Your Progress</h1>
          <p className="text-muted-foreground">Track your learning journey</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-freight-orange/20 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-freight-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2,450</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-freight-navy/20 rounded-lg">
                  <Target className="h-6 w-6 text-freight-navy" />
                </div>
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">Completion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-freight-orange" />
              Learning Path Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Training Modules</span>
                <span className="text-sm text-muted-foreground">2 of 4 completed</span>
              </div>
              <Progress value={50} className="h-3" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Simulation Scenarios</span>
                <span className="text-sm text-muted-foreground">8 of 12 completed</span>
              </div>
              <Progress value={67} className="h-3" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Overall Mastery</span>
                <span className="text-sm text-muted-foreground">85% complete</span>
              </div>
              <Progress value={85} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-freight-orange" />
              This Week's Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="flex items-center justify-between py-2">
                  <div className="font-medium w-12">{day.day}</div>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-freight-orange rounded-full"></div>
                      <span>{day.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-freight-navy rounded-full"></div>
                      <span>{day.simulations} simulations</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {day.modules + day.simulations > 0 ? `+${(day.modules * 50) + (day.simulations * 100)} pts` : '—'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-freight-orange" />
              Achievements
            </CardTitle>
            <CardDescription>Unlock badges as you progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    achievement.earned 
                      ? 'bg-freight-success/10 border-freight-success/20' 
                      : 'bg-muted/50 border-muted'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    achievement.earned 
                      ? 'bg-freight-success text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                  <Badge variant={achievement.earned ? "default" : "secondary"}>
                    {achievement.points} pts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ProgressPage;