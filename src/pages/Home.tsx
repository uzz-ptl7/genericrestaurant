import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-dish.jpg";
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
            "name": "Restaurant",
            "description": "Experience exceptional cuisine crafted with the finest ingredients and served with passion in Kigali, Rwanda.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda",
              "streetAddress": "KN 4 Ave, Kigali"
            },
            "telephone": "+250788123456",
            "servesCuisine": "International",
            "priceRange": "$10-30",
            "openingHours": "Mo-Su 09:00-22:00"
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section min-h-[70vh] flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience exceptional cuisine crafted with the finest ingredients and served with passion.
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
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Fresh ingredients, expertly prepared by our skilled chefs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick preparation and delivery to your doorstep in Kigali</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
                <p className="text-muted-foreground">Convenient pickup locations across Kigali</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Dishes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our customers' favorite dishes, crafted with care and bursting with flavor.
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
            <h2 className="text-4xl font-bold mb-6">About Restaurant</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Restaurant, we believe that great food brings people together. Our passionate chefs use only the 
              freshest ingredients to create dishes that celebrate flavor, quality, and tradition. Every meal is 
              prepared with love and attention to detail, ensuring that your dining experience is nothing short of exceptional.
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