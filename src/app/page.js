import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";

export default function Home() {
  return (
   <div className="max-w-[1600px] mx-auto p-6">
       <Banner/>
       <AboutUs/>
       <Services/>
       <ContactUs/>
       <OurProducts/>
   </div>
  );
}
