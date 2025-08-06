import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Crown, Star } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", points: 4850, level: "Expert", avatar: "SC", badges: 12 },
    { rank: 2, name: "Mike Rodriguez", points: 4720, level: "Expert", avatar: "MR", badges: 11 },
    { rank: 3, name: "You", points: 2450, level: "Advanced", avatar: "YU", badges: 6 },
    { rank: 4, name: "Emma Johnson", points: 2380, level: "Advanced", avatar: "EJ", badges: 5 },
    { rank: 5, name: "David Kim", points: 2150, level: "Intermediate", avatar: "DK", badges: 4 },
    { rank: 6, name: "Lisa Wang", points: 1950, level: "Intermediate", avatar: "LW", badges: 4 },
    { rank: 7, name: "Alex Turner", points: 1820, level: "Intermediate", avatar: "AT", badges: 3 },
    { rank: 8, name: "Maria Garcia", points: 1650, level: "Beginner", avatar: "MG", badges: 3 }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-freight-danger text-white";
      case "Advanced": return "bg-freight-orange text-white";
      case "Intermediate": return "bg-freight-warning text-black";
      case "Beginner": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const weeklyLeaders = [
    { name: "Sarah Chen", points: 850, change: "+2" },
    { name: "You", points: 720, change: "+5" },
    { name: "Mike Rodriguez", points: 680, change: "-1" }
  ];

  return (
    <AppLayout currentPage="leaderboard">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-freight-navy">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank among other dispatchers</p>
        </div>

        {/* Your Rank Card */}
        <Card className="border-freight-orange">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-freight-orange" />
              Your Current Ranking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getRankIcon(3)}
                  <span className="text-2xl font-bold">#3</span>
                </div>
                <div>
                  <div className="font-medium">2,450 points</div>
                  <div className="text-sm text-muted-foreground">6 badges earned</div>
                </div>
              </div>
              <Badge className={getLevelColor("Advanced")}>Advanced</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Leaders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-freight-orange" />
              This Week's Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyLeaders.map((leader, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {getRankIcon(index + 1)}
                    </div>
                    <span className="font-medium">{leader.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{leader.points} pts</div>
                    <div className={`text-sm ${
                      leader.change.startsWith('+') ? 'text-freight-success' : 'text-freight-danger'
                    }`}>
                      {leader.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Global Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Global Rankings</CardTitle>
            <CardDescription>Top dispatchers of all time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    user.name === "You" ? 'bg-freight-orange/10 border border-freight-orange/20' : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar>
                    <AvatarFallback className="bg-freight-navy text-white text-sm">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.badges} badges</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold">{user.points.toLocaleString()}</div>
                    <Badge variant="secondary" className={getLevelColor(user.level)}>
                      {user.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Leaderboard;