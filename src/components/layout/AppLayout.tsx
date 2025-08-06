import { ReactNode } from "react";
import { Truck, BookOpen, Gamepad2, TrendingUp, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

const AppLayout = ({ children, currentPage }: AppLayoutProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Truck, href: "/" },
    { id: "training", label: "Training", icon: BookOpen, href: "/training" },
    { id: "simulator", label: "Simulator", icon: Gamepad2, href: "/simulator" },
    { id: "progress", label: "Progress", icon: TrendingUp, href: "/progress" },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy, href: "/leaderboard" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-around py-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors",
                  isActive 
                    ? "text-freight-orange" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;