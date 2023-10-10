"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../../ui/Button";
import { useSearchParams } from "next/navigation";

type Laptop = {
  name: string;
  mainImage: string;
  desc: string;
  otherImages: string[];
};
interface ProductOverviewProps {
  laptop: Laptop;
}

interface ProductOverviewProps {
  params: {
    productId: string;
  };
}

export default function ProductOverview({ params }: ProductOverviewProps) {
  const [activeContainer, setActiveContainer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [laptop, setLaptop] = useState({
    name: "",
    mainImage: "",
    desc: "",
    otherImages: [],
  });

  useEffect(() => {
    async function getLaptop(id: string) {
      setIsLoading(true);
      const res = await fetch(
        `https://rex-tech-guy.onrender.com/api/v1/laptops/getLaptop/${id}`
      );

      const data = await res.json();
      setLaptop(data.laptop);
      // setIsLoading(false);
    }

    getLaptop(params.productId);
  }, [params]);

  const { name, mainImage, desc, otherImages } = laptop;
  const data = [mainImage, ...otherImages];

  const [activeImage, setActiveImage] = useState(data[0]);

  function handleMouseEnter(newImage: string, index: number) {
    setActiveContainer(index);
    setActiveImage(newImage);
  }

  return (
    <div className="mx-auto mb-10 mt-20 grid max-w-[97%] items-center gap-10 sm:max-w-[90%] sm:grid-cols-[1fr_2fr]">
      <div className="">
        <div className=" flex items-center justify-center h-60">
          <Image
            src={activeImage}
            alt={name}
            width={224}
            height={224}
            className="w-80"
          />
        </div>
        <div className="items-center flex justify-center">
          {}
          <div className="grid w-[90%] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] ">
            {data.map((laptop, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(laptop, index)}
                className={
                  activeContainer === index
                    ? `flex justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
                    : `flex justify-center rounded-md  hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
                }
                key={Math.random()}
              >
                {/* <img src={laptop} className="w-20" /> */}
                <Image
                  src={laptop}
                  alt="gaming laptop"
                  width={500}
                  height={500}
                  className="w-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold capitalize">{name}</h2>
        <h3 className="text-2xl font-medium capitalize">details:</h3>
        <p className="text-xl">{desc}</p>
        <h3 className="text-xl ">Ugx 3,000,000</h3>
        <div className="space-x-3">
          <Button>add to cart</Button>
          <Button>shop</Button>
        </div>
      </div>
    </div>
  );
}
