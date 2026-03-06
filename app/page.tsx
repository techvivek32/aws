import { Hero } from "@/sections/Hero";
import { FreePregnancyTest } from "@/sections/FreePregnancyTest";
import { Services } from "@/sections/Services";
import { WeightLossTeaser } from "@/sections/WeightLossTeaser";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { BlogTeaser } from "@/sections/BlogTeaser";
import { BookAppointment } from "@/sections/BookAppointment";
import { LocationsSection } from "@/sections/LocationsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FreePregnancyTest />
      <Services />
      <WeightLossTeaser />
      <WhyChooseUs />
      <BlogTeaser />
      <BookAppointment />
      <LocationsSection />
    </>
  );
}
