import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import TopHeader from "./components/layouts/TopHeader";
import ScrollToTop from "./components/ScrollToTop";
import SocialButtons from "./components/socialButtons";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
  }, []);
  
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <SocialButtons/>
    <TopHeader/>
    <Navbar />

      <AppRoutes/>

      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;