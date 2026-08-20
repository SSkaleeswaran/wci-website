import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import TopHeader from "./components/layouts/TopHeader";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <TopHeader/>
    <Navbar />

      <AppRoutes/>

      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;