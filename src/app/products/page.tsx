import Hero from "../../components/Hero";
import ProductsSection from "../../ui/ProductsSection";

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

export type Laptop = {
  _id: string;
};

export default async function AllProductsPage() {
  const laptops = await getLaptops();

  return (
    <section>
      <Hero />
      <h2 className="mb-5 text-center text-5xl text-emerald-600">
        Which laptop is right for you?
      </h2>
      <ProductsSection data={laptops} filters={filters} />
    </section>
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
