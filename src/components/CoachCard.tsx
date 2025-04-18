import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface CoachProps {
  name: string;
  specialization: string;
  experience: string;
  imageSrc: string;
  bio: string;
}

const CoachCard = ({ name, specialization, experience, imageSrc, bio }: CoachProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-col items-center pt-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={imageSrc} alt={name} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-muted-foreground">{specialization}</p>
          <p className="text-sm text-muted-foreground">Опыт: {experience}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-center">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <a 
          href="#" 
          className="text-primary font-medium hover:underline text-sm"
        >
          Подробнее о тренере
        </a>
      </CardFooter>
    </Card>
  );
};

export default CoachCard;