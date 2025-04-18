import TrainingCard, { TrainingCardProps } from "./TrainingCard";

const trainings: TrainingCardProps[] = [
  {
    title: "Базовая техника",
    description: "Освойте основные навыки владения мячом, ведения и передачи.",
    level: "Начинающий",
    duration: "60 минут",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Удары по воротам",
    description: "Научитесь наносить точные и мощные удары с разных позиций.",
    level: "Средний",
    duration: "45 минут",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Тактика командной игры",
    description: "Изучите продвинутые тактические приемы и стратегии командного взаимодействия.",
    level: "Продвинутый",
    duration: "90 минут",
    imageSrc: "/placeholder.svg",
  }
];

const TrainingsList = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Наши тренировки</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Выберите программу тренировки, которая подходит вашему уровню подготовки и 
          поможет достичь поставленных целей
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training, index) => (
            <TrainingCard key={index} {...training} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="/trainings" 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Посмотреть все тренировки
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingsList;