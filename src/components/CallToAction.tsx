import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать тренировки?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Запишитесь на пробное занятие прямо сейчас и сделайте первый шаг к улучшению своих футбольных навыков!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Записаться на тренировку
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/20"
          >
            Задать вопрос
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;