import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Gaming from "@/components/Gaming";
import Designers from "@/components/Designers";
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Brands />
      <Banner />
      <Gaming />
      <Designers />
      <AllProducts />
    </div>
  );
}
