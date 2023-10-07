"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../data";
import Button from "../ui/Button";

const laptops = data;

export type Laptop = {
  id: string;
  make: string;
  name: string;
  tagLine: string;
  photo: string;
};

export default function Slider() {
  const [selected, setSelected] = useState(0);

  const { name, photo, tagline, make } = data[selected];

  function nextImage() {
    if (selected === laptops.length - 1) {
      setSelected(0);
    } else {
      setSelected((value) => value + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  });
  return (
    <div className="m-auto mt-10 max-w-[95%]">
      <div className="grid py-5 sm:grid-cols-2 sm:py-10">
        <div className=" order-last flex flex-col items-start justify-center space-y-2 px-5 py-2 sm:space-y-3 sm:px-1">
          <h3 className="text-sm font-light uppercase tracking-widest">
            new product
          </h3>
          <h2 className="text-xl uppercase sm:text-5xl">
            {name}
            <br className="hidden sm:block"></br>
            {make}
          </h2>
          <h3 className="sm:text-2xl">{tagline}</h3>
          <div className="space-x-5 ">
            <Button>learn more</Button>
            <Button>shop</Button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Image
            src={photo}
            alt={name}
            width={500}
            height={500}
            className="w-3/4"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={
              index === selected
                ? `h-2 w-20 rounded-lg bg-emerald-800 sm:w-12`
                : `h-2 w-7 rounded-lg border border-emerald-800 sm:w-5`
            }
            onClick={() => setSelected(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
