import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/sections/About";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import TouristVisaPage from "../pages/services/TouristVisaPage";


function AppRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/countries" element={<h1>Countries Page</h1>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/book-consultation"
        element={<h1>Book Consultation Page</h1>}
      />
      <Route path="/faq" element={<FAQPage />} />

      {/* services route */}
      <Route
        path="/services/tourist-visa"
        element={<TouristVisaPage />}
      />
      {/* <Route path="/services/tourist-visa" element={<TouristVisaPage/>}/> */}
      {/* <Route path="/services/work-visa" element={<WorkVisaPage/>}/>
       <Route path="/services/study-visa" element={<StudyVisaPage/>}/> */}


    </Routes>

  );
}

export default AppRoutes;
