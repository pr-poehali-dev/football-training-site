import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageSrc: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Благодаря тренировкам в этой школе я значительно улучшил технику владения мячом. Тренеры действительно знают свое дело!",
    author: "Игорь К.",
    role: "Любитель футбола",
    imageSrc: "/placeholder.svg",
  },
  {
    content: "Занимаюсь здесь уже год, и мой прогресс очевиден. Индивидуальный подход и внимание к деталям - вот что отличает этих тренеров.",
    author: "Елена С.",
    role: "Полузащитник любительской команды",
    imageSrc: "/placeholder.svg",
  },
  {
    content: "Привел сюда сына, и теперь он в восторге от футбола. Тренеры умеют найти подход к детям и сделать тренировки интересными.",
    author: "Андрей М.",
    role: "Родитель юного футболиста",
    imageSrc: "/placeholder.svg",
  }
];

const Testimonial = ({ content, author, role, imageSrc }: TestimonialProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1 flex flex-col">
        <div className="mb-4 flex-1">
          <p className="italic text-muted-foreground">"{content}"</p>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={imageSrc} alt={author} />
            <AvatarFallback>{author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Отзывы наших учеников</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Узнайте, что говорят люди, которые уже прошли наши тренировки
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;