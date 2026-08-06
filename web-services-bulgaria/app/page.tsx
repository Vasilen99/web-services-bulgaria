import Header from "@/page-components/header";
import Services from "@/page-components/services";
import SelectedWork from "@/page-components/selected-work";
import Process from "@/page-components/process";
import MarqueeGallery from "@/page-components/marquee-gallery";
import Team from "@/page-components/team";
import Testimonials from "@/page-components/testimonials";
import Footer from "@/page-components/footer";

export default function Home() {
  return (
    <main className="bg-primary">
      <Header />
      <MarqueeGallery />
      <Team />
      <Services />
      <SelectedWork />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
