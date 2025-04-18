import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface TrainingCardProps {
  title: string;
  description: string;
  level: "Начинающий" | "Средний" | "Продвинутый";
  duration: string;
  imageSrc: string;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Начинающий":
      return "bg-green-500 hover:bg-green-600";
    case "Средний":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "Продвинутый":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

const TrainingCard = ({ title, description, level, duration, imageSrc }: TrainingCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={getLevelColor(level)}>{level}</Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          Продолжительность: {duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default TrainingCard;