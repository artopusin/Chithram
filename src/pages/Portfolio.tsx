import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArtworkCard from '@/components/portfolio/ArtworkCard';
import AchievementCard from '@/components/portfolio/AchievementCard';
import SocialMediaCard from '@/components/portfolio/SocialMediaCard';
import { artistInfo, artworks, achievements, artClassImages, youtubeVideos } from '@/data/portfolio-data';

export default function Portfolio() {
  const [showAllArtworks, setShowAllArtworks] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen scroll-smooth">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">_Chithram_</h1>
            <div className="flex gap-4 max-md:hidden">
              <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
              <Button variant="ghost" onClick={() => scrollToSection('artworks')}>Artworks</Button>
              <Button variant="ghost" onClick={() => scrollToSection('achievements')}>Achievements</Button>
              <Button variant="ghost" onClick={() => scrollToSection('classes')}>Classes</Button>
              <Button variant="ghost" onClick={() => scrollToSection('youtube')}>Videos</Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="py-16 xl:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 gradient-text animate-fade-in">
              About Me
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
              <div className="animate-slide-in">
                <img
                  src={artistInfo.photo}
                  alt={artistInfo.name}
                  className="w-full rounded-2xl shadow-elegant aspect-square object-cover"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-3xl font-bold text-foreground">{artistInfo.name}</h3>
                <p className="text-foreground leading-relaxed">{artistInfo.bio}</p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {artistInfo.socialMedia.map((social) => (
                    <SocialMediaCard key={social.platform} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="artworks" className="py-16 xl:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 gradient-text">
            My Artworks
          </h2>
          
          <div className="mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {artworks.slice(0, 5).map((artwork) => (
                <SwiperSlide key={artwork.id}>
                  <ArtworkCard artwork={artwork} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mb-8">
            <Button
              size="lg"
              onClick={() => setShowAllArtworks(!showAllArtworks)}
              className="shadow-elegant"
            >
              {showAllArtworks ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  See More
                </>
              )}
            </Button>
          </div>

          {showAllArtworks && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="achievements" className="py-16 xl:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 gradient-text">
            Achievements
          </h2>
          
          <div className="mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {achievements.map((achievement) => (
                <SwiperSlide key={achievement.id}>
                  <AchievementCard achievement={achievement} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mb-8">
            <Button
              size="lg"
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              className="shadow-elegant"
            >
              {showAllAchievements ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  See More
                </>
              )}
            </Button>
          </div>

          {showAllAchievements && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="classes" className="py-16 xl:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 gradient-text">
            Art Classes
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-lg text-foreground mb-8">
              Join our creative art classes designed for kids of all ages. Learn various techniques and express your creativity in a fun and supportive environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {artClassImages.map((img) => (
                <Card key={img.id} className="overflow-hidden group">
                  <img
                    src={img.image}
                    alt={img.alt}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-smooth"
                  />
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="shadow-elegant">
                Enroll Your Kids Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="youtube" className="py-16 xl:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl xl:text-5xl font-bold text-center mb-12 gradient-text">
            Latest Videos
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>artist@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Art Street, Creative City</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block hover:underline">About Me</button>
                <button onClick={() => scrollToSection('artworks')} className="block hover:underline">Artworks</button>
                <button onClick={() => scrollToSection('achievements')} className="block hover:underline">Achievements</button>
                <button onClick={() => scrollToSection('classes')} className="block hover:underline">Art Classes</button>
                <button onClick={() => scrollToSection('youtube')} className="block hover:underline">Videos</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {artistInfo.socialMedia.map((social) => (
                  <button
                    key={social.platform}
                    onClick={() => window.open(social.url, '_blank')}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth"
                  >
                    {social.platform.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>2025 Artist Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
