/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import Button from "../ui/Button";

// const data = [
//   {
//     id: 0,
//     name: "hp omen 16 (2022 amd)",
//     image: "/images/omen-22.png",
//   },
//   {
//     id: 1,
//     name: "victus 16 gaming laptop (2023 intel)",
//     image: "/images/victus-16.png",
//   },
//   {
//     id: 2,
//     name: "omen transcend 16 gaming laptop",
//     image: "/images/omen-transcend.png",
//   },
//   {
//     id: 3,
//     name: "omen 16 gaming laptop (2023 intel",
//     image: "/images/omen-intel.png",
//   },
// ];

export default function ProductOverview({ laptop }) {
  const { name, mainImage, desc, otherImages } = laptop;
  const data = [mainImage, ...otherImages];

  const [activeImage, setActiveImage] = useState(data[0]);
  const [activeContainer, setActiveContainer] = useState(0);

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

  function handleMouseEnter(newImage, index) {
    setActiveContainer(index);
    setActiveImage(newImage);
  }

  return (
    <div className="mx-auto mb-10 mt-20 grid max-w-[97%] items-center gap-10 sm:max-w-[90%] sm:grid-cols-[1fr_2fr]">
      <div className="">
        <img src={activeImage} className="w-80" />
        <div className="grid w-[90%] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
          {data.map((laptop, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(laptop, index)}
              className={
                activeContainer === index
                  ? `flex justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-800 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
                  : `flex justify-center rounded-md  hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-800`
              }
              key={laptop.id}
            >
              <img src={laptop} className="w-20" />
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
