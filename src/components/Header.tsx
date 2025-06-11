import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/90 shadow-sm border-b border-button-color/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-xl md:text-2xl font-bold text-title-color">
              <span className="text-title-color">יערה אורן</span>
              <div className="text-xs md:text-sm font-normal text-body-text">
                סדנאות ומתנות מעוצבות
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-body-text hover:text-button-color transition-colors text-sm lg:text-base">
              אודות
            </a>
            <a href="#services" className="text-body-text hover:text-button-color transition-colors text-sm lg:text-base">
              שירותים
            </a>
            <a href="#gallery" className="text-body-text hover:text-button-color transition-colors text-sm lg:text-base">
              גלריה
            </a>
            <a href="#contact" className="text-body-text hover:text-button-color transition-colors text-sm lg:text-base">
              צור קשר
            </a>
          </nav>

          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-button-color text-button-color hover:bg-button-color hover:text-white text-sm px-3 py-2"
          >
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline text-xs md:text-sm">054-5462773</span>
            <span className="sm:hidden text-xs">התקשר</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;