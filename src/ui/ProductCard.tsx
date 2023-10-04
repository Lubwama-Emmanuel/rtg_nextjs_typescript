import Link from "next/link";
import Image from "next/image";

type Laptop = {
  name: string;
  mainImage: string;
  _id: number;
};

interface ProductCardProps {
  laptop: Laptop;
  larger: boolean;
}

export default function ProductCard({
  laptop,
  larger = false,
}: ProductCardProps) {
  const { name, mainImage, _id: id } = laptop;

  return (
    <div
      className={
        larger
          ? `flex items-center sm:hover:scale-110`
          : `flex flex-col items-center sm:hover:scale-110`
      }
      // onClick={() => <Navigate to="/products/60" />}
    >
      <div className="flex items-center justify-center">
        {/* <img src={mainImage} className="w-32 sm:w-64" /> */}
        <Image
          src={mainImage}
          alt="gaming laptop"
          width={200}
          height={200}
          className="w-[100%]"
        />
      </div>
      <div className="">
        <h3 className="sm:text-md text-center text-sm uppercase">{name}</h3>
        <h3 className="text-sm">Ugx 3,000,000</h3>
        <Link href={`/products/${id}`}>To</Link>
      </div>
    </div>
  );
}
