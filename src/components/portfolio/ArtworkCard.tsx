import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import type { Artwork } from '@/types/portfolio';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-glow transition-smooth">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">{artwork.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{artwork.medium}</p>
        <p className="text-sm text-foreground mb-4 line-clamp-2">{artwork.description}</p>
        {artwork.shoppingLink && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(artwork.shoppingLink, '_blank')}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
