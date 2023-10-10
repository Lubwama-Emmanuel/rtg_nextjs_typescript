import ComponentHead from "../ui/ComponentHead";
import ProductCard from "../ui/ProductCard";

const data = [
  {
    _id: 0,
    name: "hp omen 16 (2022 amd)",
    mainImage: "/images/omen-22.png",
  },
  {
    _id: 1,
    name: "victus 16 gaming laptop (2023 intel)",
    mainImage: "/images/victus-16.png",
  },
  {
    _id: 2,
    name: "omen transcend 16 gaming laptop",
    mainImage: "/images/omen-transcend.png",
  },
  {
    _id: 3,
    name: "omen 16 gaming laptop (2023 intel",
    mainImage: "/images/omen-intel.png",
  },
  {
    _id: 4,
    name: "omen 16 gaming laptop (2022 amd)",
    mainImage: "/images/omen-16.png",
  },
];

export default function AllProducts() {
  return (
    <section className="m-auto mb-20 w-[95%]">
      <ComponentHead title={"All Products"} link={"/products"} />
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5">
        {data.map((el) => (
          <ProductCard key={Math.random()} laptop={el} larger={false} />
        ))}
      </div>
    </section>
  );
}
