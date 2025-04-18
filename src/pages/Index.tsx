import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrainingsList from "@/components/TrainingsList";
import CoachesList from "@/components/CoachesList";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrainingsList />
        <CoachesList />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;