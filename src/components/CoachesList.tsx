import CoachCard, { CoachProps } from "./CoachCard";

const coaches: CoachProps[] = [
  {
    name: "Алексей Смирнов",
    specialization: "Техника владения мячом",
    experience: "10 лет",
    imageSrc: "/placeholder.svg",
    bio: "Бывший игрок профессионального клуба с богатым опытом тренерской работы с юниорами и взрослыми футболистами.",
  },
  {
    name: "Мария Иванова",
    specialization: "Физическая подготовка",
    experience: "8 лет",
    imageSrc: "/placeholder.svg",
    bio: "Специалист по спортивной медицине, разрабатывает индивидуальные программы физической подготовки футболистов.",
  },
  {
    name: "Дмитрий Петров",
    specialization: "Тактика игры",
    experience: "12 лет",
    imageSrc: "/placeholder.svg",
    bio: "Тренер с международной лицензией, специализируется на командной тактике и стратегии игры.",
  },
];

const CoachesList = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Наши тренеры</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Опытные профессионалы, которые помогут вам достичь новых высот в футболе
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesList;