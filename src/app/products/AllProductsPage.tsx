import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductsSection from "../ui/ProductsSection";
import { useLoaderData } from "react-router-dom";

const filters = [
  {
    id: 0,
    filter: "all products",
  },
  {
    id: 1,
    filter: "dell",
  },
  {
    id: 2,
    filter: "hp",
  },
  {
    id: 3,
    filter: "education",
  },
  {
    id: 4,
    filter: "touch screen",
  },
  {
    id: 5,
    filter: "4k",
  },
  {
    id: 6,
    filter: "360",
  },
  {
    id: 7,
    filter: "GPU",
  },
  {
    id: 8,
    filter: "brand new",
  },
  {
    id: 9,
    filter: "refurbrished",
  },
];

export default function AllProductsPage() {
  const [isFilterToTop, setIsFilterToTop] = useState(false);
  const data = useLoaderData();

  useEffect(() => {
    // Function to be handling scrolling event
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 400) {
        setIsFilterToTop(true);
      } else {
        setIsFilterToTop(false);
      }
    };

    // Adding acroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleaning up th event lsitener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Hero />
      <h2 className="mb-5 text-center text-5xl text-emerald-600">
        Which laptop is right for you?
      </h2>
      <ProductsSection
        data={data}
        filters={filters}
        isFilterToTop={isFilterToTop}
      />
    </section>
  );
}
