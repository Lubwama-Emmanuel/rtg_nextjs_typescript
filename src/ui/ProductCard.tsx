"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div
      className={
        larger
          ? `flex items-center`
          : `flex flex-col bg-emerald-50 w-64 shadow-md items-center hover:shadow-lg rounded-xl py-5 px-3 b`
      }
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="flex items-center justify-center">
        <Image
          src={mainImage}
          alt="gaming laptop"
          width={200}
          height={200}
          className="w-32 sm:w-64"
        />
      </div>
      <div>
        <h3 className="sm:text-md text-center text-sm uppercase">{name}</h3>
        <div className="flex items-center justify-around">
          <h3 className="text-sm">Ugx 3,000,000</h3>
        </div>
      </div>
    </div>
  );
}
