import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import rwandanHero from "@/assets/rwandan-hero.jpg";
import FoodCard from "@/components/FoodCard";
import { menuItems } from "@/data/menuData";

const Home = () => {
  const popularItems = menuItems.filter(item => item.popular).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Kigali Kitchen",
            "description": "Authentic Rwandan cuisine in the heart of Kigali. Traditional dishes like Inyama n'Ubwoba, Ugali, and Ikivuguto delivered fresh to your door.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda",
              "streetAddress": "KN 4 Ave, Kigali"
            },
            "telephone": "+250788123456",
            "servesCuisine": "Rwandan",
            "priceRange": "RWF 2000-20000",
            "openingHours": "Mo-Su 09:00-22:00"
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section min-h-[70vh] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rwandanHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent">Kigali Kitchen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Authentic Rwandan cuisine crafted with traditional recipes and the finest local ingredients from the land of a thousand hills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="hero" size="lg">
                Explore Our Menu
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-foreground">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentic Rwandan Flavors</h3>
                <p className="text-muted-foreground">Traditional recipes passed down through generations, using local Rwandan ingredients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery in Kigali</h3>
                <p className="text-muted-foreground">Quick preparation and delivery throughout Kigali city and surrounding areas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local & Fresh</h3>
                <p className="text-muted-foreground">Supporting local farmers and using the freshest ingredients from Rwanda</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Rwandan Dishes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our customers' favorite traditional Rwandan dishes, prepared with authentic recipes and served with love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularItems.map((item) => (
              <FoodCard key={item.id} {...item} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/menu">
              <Button variant="hero" size="lg">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Kigali Kitchen</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Kigali Kitchen, we celebrate the rich culinary heritage of Rwanda. Our passionate chefs prepare traditional 
              dishes like Inyama n'Ubwoba, authentic Ugali, and refreshing Ikivuguto using time-honored recipes and the finest 
              local ingredients. Experience the true taste of Rwanda, delivered fresh to your door.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg">+250 788 123 456</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg">KN 4 Ave, Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;