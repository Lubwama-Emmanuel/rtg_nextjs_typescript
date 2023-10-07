"use client";
import Link from "next/link";
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
          : `flex flex-col bg-emerald-50 shadow-md items-center hover:shadow-lg rounded-xl`
      }
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="flex items-center justify-center">
        {/* <img src={mainImage} className="w-32 sm:w-64" /> */}
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
          <button>
            <Link href={`/products/${id}`}>To</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
