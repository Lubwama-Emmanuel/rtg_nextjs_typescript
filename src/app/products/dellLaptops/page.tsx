import Hero from "../../../components/Hero";
import ProductsSection from "../../../ui/ProductsSection";

const DellFilters = [
  {
    id: 0,
    filter: "Dell",
  },
  {
    id: 1,
    filter: "xps",
  },
  {
    id: 2,
    filter: "precision",
  },
  {
    id: 3,
    filter: "latitude",
  },
  {
    id: 4,
    filter: "inspiron",
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
  {
    id: 10,
    filter: "12th gen",
  },
];

export default async function DellLaptops() {
  const data = await getLaptops();
  return (
    <div>
      <Hero />
      <ProductsSection data={data} filters={DellFilters} />
    </div>
  );
}

async function getLaptops() {
  const res = await fetch(
    `https://rex-tech-guy.onrender.com/api/v1/laptops/getLaptops`
  );

  const data = await res.json();
  const laptops = data.data.laptops;

  return laptops;
}
