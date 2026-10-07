import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../components/sections/About";
import AboutPage from "../pages/AboutPage";

import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import TouristVisaPage from "../pages/services/TouristVisaPage";
import StudyVisaPage from "../pages/services/StudyVisaPage";

import CountriesPage from "../pages/CountriesPage";
import VisitorVisaPage from "../pages/services/VisitorVisaPage";
import BusinessVisaPage from "../pages/services/BusinessVisaPage";

import CanadaPage from "../pages/countries/CanadaPage";
import TaiwanPage from "../pages/countries/TaiwanPage";
import USAPage from "../pages/countries/USAPage";
import UKPage from "../pages/countries/UKPage";
import AustraliaPage from "../pages/countries/AustraliaPage";
import JapanPage from "../pages/countries/JapanPage";



function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/visa-services" element={<ServicesPage />} />
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route
        path="/book-consultation"
        element={<h1>Book Consultation Page</h1>}
      /> */}
      <Route path="/faq" element={<FAQPage />} />

      {/* services route */}
      <Route
        path="/visa-services/tourist-visa"
        element={<TouristVisaPage />}
      />
      <Route path="/visa-services/study-visa" element={<StudyVisaPage/>}/>
      <Route path="/visa-services/visitor-visa" element={<VisitorVisaPage/>}/>
      <Route path="/visa-services/business-visa" element={<BusinessVisaPage/>}/>

       
    
       {/* <Route path="/services/work-visa" element={<WorkVisaPage/>}/> */}


       {/* countries pages */}
      <Route path="/countries/usa" element={<USAPage />} />
      <Route path="/countries/canada" element={<CanadaPage />} />
      <Route path="/countries/uk" element={<UKPage />} />

      <Route path="/countries/schengen" element={<h1>Schengen Page</h1>} />
      <Route path="/countries/south-korea" element={<h1>South Korea Page</h1>} />
      <Route path="/countries/japan" element={<JapanPage />} />
      <Route path="/countries/australia" element={<AustraliaPage />} />
      <Route path="/countries/new-zealand" element={<h1>New Zealand Page</h1>} />
      <Route path="/countries/taiwan" element={<TaiwanPage />} />
      <Route path="/countries/russia" element={<h1>Russia Page</h1>} />
   
    </Routes>

  );
}

export default AppRoutes;
