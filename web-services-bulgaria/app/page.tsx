import HeroSection from "@/page-components/hero-section";
import PartnersGallery from "@/page-components/partners-gallery";
import Team from "@/page-components/team";
import { Technologies } from "@/page-components/technologies";
// import Services from "@/page-components/services";
// import SelectedWork from "@/page-components/selected-work";
// import Process from "@/page-components/process";
// import Testimonials from "@/page-components/testimonials";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <Technologies />
      <PartnersGallery />
      <Team />
      {/* <Services />
      <SelectedWork />
      <Process />
      <Testimonials /> */}
    </main>
  );
}
