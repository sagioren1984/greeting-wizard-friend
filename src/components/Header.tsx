import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-brand-cream shadow-sm border-b border-brand-beige">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-brand-pink">
              <span className="text-brand-pink">יערה אורן</span>
              <div className="text-sm font-normal text-muted-foreground">
                סדנאות ומתנות מעוצבות
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-brand-pink transition-colors">
              אודות
            </a>
            <a href="#services" className="text-foreground hover:text-brand-pink transition-colors">
              שירותים
            </a>
            <a href="#gallery" className="text-foreground hover:text-brand-pink transition-colors">
              גלריה
            </a>
            <a href="#contact" className="text-foreground hover:text-brand-pink transition-colors">
              צור קשר
            </a>
          </nav>

          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">054-5462773</span>
            <span className="sm:hidden">התקשר</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;