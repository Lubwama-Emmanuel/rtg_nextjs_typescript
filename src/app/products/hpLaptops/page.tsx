import Hero from "../../../components/Hero";
import ProductsSection from "../../../ui/ProductsSection";

const DellFilters = [
  {
    id: 0,
    filter: "hp",
  },
  {
    id: 1,
    filter: "spectre",
  },
  {
    id: 2,
    filter: "elitebook",
  },
  {
    id: 3,
    filter: "probook",
  },
  {
    id: 4,
    filter: "omen",
  },
  {
    id: 5,
    filter: "victus",
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
    filter: "ZBook",
  },
  {
    id: 10,
    filter: "12th gen",
  },
];

export default function HpLaptops() {
  const data = [{}];
  return (
    <div>
      <Hero />
      <ProductsSection data={data} filters={DellFilters} />
    </div>
  );
}
