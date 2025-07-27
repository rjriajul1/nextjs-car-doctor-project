import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Services from "./components/Services";

export default function Home() {
  return (
   <div className="max-w-[1600px] mx-auto p-6">
       <Banner/>
       <AboutUs/>
       <Services/>
   </div>
  );
}
