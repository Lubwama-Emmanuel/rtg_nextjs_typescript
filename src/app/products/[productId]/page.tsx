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
  console.log("params", params);
  const [activeContainer, setActiveContainer] = useState(0);
  const [laptop, setLaptop] = useState({
    name: "",
    mainImage: "",
    desc: "",
    otherImages: [],
  });

  useEffect(() => {
    async function getLaptop(id: string) {
      const res = await fetch(
        `https://rex-tech-guy.onrender.com/api/v1/laptops/getLaptop/${id}`
      );

      const data = await res.json();
      setLaptop(data.laptop);
    }

    getLaptop(params.productId);
  }, [params]);

  console.log("state laptop", laptop);
  const { name, mainImage, desc, otherImages } = laptop;
  const data = [mainImage, ...otherImages];

  const [activeImage, setActiveImage] = useState(data[0]);

  // function moveContainer() {
  //   if (activeContainer === 3) {
  //     setActiveContainer(0);
  //   } else {
  //     setActiveContainer((value) => value + 1);
  //   }
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     moveContainer();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // });

  function handleMouseEnter(newImage: string, index: number) {
    setActiveContainer(index);
    setActiveImage(newImage);
  }

  return (
    <div className="mx-auto mb-10 mt-20 grid max-w-[97%] items-center gap-10 sm:max-w-[90%] sm:grid-cols-[1fr_2fr]">
      <div className="">
        {/* <img src={activeImage} className="w-80" /> */}
        <Image
          src={mainImage}
          alt={name}
          width={500}
          height={500}
          className="w-80"
        />
        <div className="grid w-[90%] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
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
                src={mainImage}
                alt="gaming laptop"
                width={500}
                height={500}
                className="w-[100%]"
              />
            </div>
          ))}
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

// async function getLaptop(params) {
//   console.log(params);

//   return {
//     laptop: {
//       name: "laptop",
//     },
//   };
// }
