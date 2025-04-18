import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SoccerBall, MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <SoccerBall className="h-6 w-6" />
          <h1 className="text-xl font-bold">Футбол Мастер</h1>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "font-bold border-b-2 border-white" : "hover:text-gray-200"
            }
          >
            Главная
          </NavLink>
          <NavLink 
            to="/trainings" 
            className={({isActive}) => 
              isActive ? "font-bold border-b-2 border-white" : "hover:text-gray-200"
            }
          >
            Тренировки
          </NavLink>
          <NavLink 
            to="/coaches" 
            className={({isActive}) => 
              isActive ? "font-bold border-b-2 border-white" : "hover:text-gray-200"
            }
          >
            Тренеры
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Записаться
          </Button>
        </div>

        {/* Мобильное меню */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-2 hover:text-gray-200"
              }
              onClick={toggleMenu}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/trainings" 
              className={({isActive}) => 
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-2 hover:text-gray-200"
              }
              onClick={toggleMenu}
            >
              Тренировки
            </NavLink>
            <NavLink 
              to="/coaches" 
              className={({isActive}) => 
                isActive ? "font-bold border-l-4 border-white pl-2" : "pl-2 hover:text-gray-200"
              }
              onClick={toggleMenu}
            >
              Тренеры
            </NavLink>
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 w-full">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;