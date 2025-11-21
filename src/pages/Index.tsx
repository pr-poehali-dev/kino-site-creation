import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  trailer: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Эпическое приключение",
    description: "Захватывающая история о героизме и дружбе в мире будущего",
    year: 2024,
    genre: "Фантастика",
    rating: 8.9,
    poster: "https://cdn.poehali.dev/projects/6ea36862-9691-48dd-adf3-785893e955e5/files/7884f5da-6080-40fd-b114-a1e2c2eff212.jpg",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Неоновые ночи",
    description: "Киберпанк-триллер о будущем, где технологии правят миром",
    year: 2024,
    genre: "Боевик",
    rating: 9.2,
    poster: "https://cdn.poehali.dev/projects/6ea36862-9691-48dd-adf3-785893e955e5/files/b208134c-c670-4577-a08e-959c92a31280.jpg",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Золотые моменты",
    description: "Трогательная драма о любви, которая преодолевает все преграды",
    year: 2024,
    genre: "Драма",
    rating: 8.5,
    poster: "https://cdn.poehali.dev/projects/6ea36862-9691-48dd-adf3-785893e955e5/files/ee6b2e0c-61ad-4a96-8d31-0fa65dc54341.jpg",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gradient">CineMax</h1>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Новинки</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Жанры</a>
            <button className="gradient-purple text-white px-6 py-2 rounded-full font-medium hover-scale">
              Войти
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover-glow">
            <div className="aspect-video bg-black">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedMovie.trailer + "?autoplay=1"}
                  title={selectedMovie.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full gradient-purple flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Play" size={32} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <Badge className="mb-3 gradient-orange border-0">{selectedMovie.genre}</Badge>
                    <h2 className="text-4xl font-bold mb-3">{selectedMovie.title}</h2>
                    <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                      {selectedMovie.description}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{selectedMovie.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={20} className="text-muted-foreground" />
                        <span>{selectedMovie.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Популярные трейлеры</h3>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span className="font-medium">Смотреть все</span>
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <Card
                key={movie.id}
                className="group cursor-pointer overflow-hidden border-border hover-scale hover-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedMovie(movie);
                  setIsPlaying(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center mb-3">
                        <Icon name="Play" size={20} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 gradient-orange border-0">
                    {movie.genre}
                  </Badge>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{movie.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {movie.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{movie.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{movie.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl gradient-purple p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 text-white">Не пропустите премьеры!</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Подпишитесь на рассылку и узнавайте первыми о новых трейлерах и анонсах
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover-scale">
              Подписаться
            </button>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 CineMax. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
