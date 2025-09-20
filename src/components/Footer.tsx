import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <span className="text-xl font-bold">Restaurant</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Experience exceptional cuisine crafted with the finest ingredients and served with passion.
              Your neighborhood destination for unforgettable dining.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-background/80 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-background/80 hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">123 Restaurant St, Food City</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@restaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Opening Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-background/80">
                <Clock className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <p>Mon - Sun</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <div className="bg-background/10 hover:bg-primary p-2 rounded-full cursor-pointer transition-colors">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="bg-background/10 hover:bg-primary p-2 rounded-full cursor-pointer transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
                <div className="bg-background/10 hover:bg-primary p-2 rounded-full cursor-pointer transition-colors">
                  <Twitter className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Restaurant. All rights reserved. Made with ❤️ for great food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;