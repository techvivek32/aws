import { Hero } from "@/sections/Hero";
import { ComprehensiveWomensCare } from "@/sections/ComprehensiveWomensCare";
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
      <ComprehensiveWomensCare />
      <Services />
      <WeightLossTeaser />
      <WhyChooseUs />
      <BlogTeaser />
      <BookAppointment />
      <LocationsSection />
    </>
  );
}
