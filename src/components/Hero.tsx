import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-football-primary to-football-secondary flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Стань лучшим на футбольном поле
          </h1>
          <p className="text-xl mb-8">
            Профессиональные тренировки для футболистов любого уровня. 
            От новичков до опытных игроков — мы поможем вам достичь новых высот.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="text-lg px-8 py-6" size="lg">
              Начать тренировки
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/20" 
              size="lg"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
      ></div>
    </div>
  );
};

export default Hero;