// import Image from "next/image";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeaturedProducts from "./components/TopCategories";
import HotProducts from "./components/HotProducts";
import OurProduct from "./components/Ourproducts";


export default function Home() {
  return (
    
    <div>
      <Hero />
      <CompanyLogo />
      <FeaturedProducts />
      <HotProducts />
      <OurProduct />
    </div>
  );
}
          