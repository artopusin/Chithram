import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import type { Achievement } from '@/types/portfolio';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-glow transition-smooth">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start gap-2 mb-2">
          <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
        </div>
        <p className="text-sm text-foreground mb-2">{achievement.description}</p>
        {achievement.date && (
          <p className="text-xs text-muted-foreground">{achievement.date}</p>
        )}
      </CardContent>
    </Card>
  );
}
