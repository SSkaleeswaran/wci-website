import About from "../components/sections/About";
import ConsultationBanner from "../components/sections/ConsultationBanner";
import Countries from "../components/sections/Countries";
import FaqAppointment from "../components/sections/FaqAppointment";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import PromoBanner from "../components/sections/PromoBanner";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";

function Home() {
  return (
    <main>
        <PromoBanner/>
        <Hero/>
        <Services/>
        <ConsultationBanner/>
        <About/>
        <Process/>
        <Countries/>
        
        <WhyChooseUs/>
        <Testimonials/>
        <FaqAppointment/>
        
    </main>
  );
}

export default Home;