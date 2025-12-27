import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import type { SocialMedia } from '@/types/portfolio';

interface SocialMediaCardProps {
  social: SocialMedia;
}

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export default function SocialMediaCard({ social }: SocialMediaCardProps) {
  const Icon = iconMap[social.icon.toLowerCase() as keyof typeof iconMap] || Facebook;

  return (
    <Card
      className="hover:shadow-glow transition-smooth cursor-pointer group"
      onClick={() => window.open(social.url, '_blank')}
    >
      <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <p className="text-sm font-medium text-foreground">{social.platform}</p>
      </CardContent>
    </Card>
  );
}
