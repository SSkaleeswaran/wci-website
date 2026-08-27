import Hero3D from "../components/hero3d/Hero3d";
import About from "../components/sections/About";
// import ConsultationBanner from "../components/sections/ConsultationBanner";
import Countries from "../components/sections/Countries";
import FaqAppointment from "../components/sections/FaqAppointment";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PromoBanner from "../components/sections/PromoBanner";

function Home() {
  return (
    <main>
      <PromoBanner/>
      

      <Services />

      {/* <ConsultationBanner /> */}
      <Hero3D />

      <About />

      <Process />

      <Countries />

      <WhyChooseUs />

      <Testimonials />

      <FaqAppointment />
    </main>
  );
}

export default Home;