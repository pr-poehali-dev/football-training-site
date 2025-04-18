import { Ball, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Ball className="h-6 w-6" />
              <h2 className="text-xl font-bold">Футбол Мастер</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные футбольные тренировки для игроков любого уровня подготовки
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="/trainings" className="text-gray-400 hover:text-white transition-colors">Тренировки</a>
              </li>
              <li>
                <a href="/coaches" className="text-gray-400 hover:text-white transition-colors">Тренеры</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@football-master.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">г. Москва, ул. Спортивная, д. 10</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-6" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Футбол Мастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;