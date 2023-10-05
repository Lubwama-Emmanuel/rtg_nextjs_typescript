import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import ProductsSection from "../ui/ProductsSection";

const lenovoLaptops = [
  {
    id: 0,
    filter: "lenovo",
  },
  {
    id: 1,
    filter: "thinkpad",
  },
  {
    id: 2,
    filter: "x1 yoga",
  },
  {
    id: 3,
    filter: "x1 carbon",
  },
  {
    id: 4,
    filter: "ideapad",
  },
  {
    id: 5,
    filter: "2 in 1",
  },
  {
    id: 6,
    filter: "touch screen",
  },
  {
    id: 7,
    filter: "gaming",
  },
  {
    id: 8,
    filter: "gpu",
  },
  {
    id: 9,
    filter: "11th gen",
  },
];

export default function LenovoLaptops() {
  const data = useLoaderData();
  return (
    <div>
      <Hero />
      <ProductsSection data={data} filters={lenovoLaptops} />
    </div>
  );
}
