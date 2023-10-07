import Button from "../ui/Button";
import Image from "next/image";

export default function Banner() {
  const clipPathValues = {
    sec1: "0 0, 100% 0, 100% 50%, 100% 100%, 25% 100%, 0% 50%",
    sec2: "25% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%",
  };

  return (
    <section className="relative mb-16 h-[600px] bg-gradient-to-b from-emerald-400 to-emerald-900 sm:h-[1300px]">
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec1})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
      <div className="absolute left-[2%] right-0 top-[5%] grid grid-cols-2 sm:left-[10%]">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold uppercase sm:text-7xl ">
            the best gaming is the gaming you can see
          </h2>
          <h3 className="sm:text-2xl">
            You donot choose a gaming laptop, it chooses you
          </h3>
          <Button>explore</Button>
        </div>
        <div>
          <Image
            src="/images/gaming.png"
            alt="gaming laptop"
            width={500}
            height={500}
            className="w-[100%]"
          />
        </div>
      </div>
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec2})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      ></div>
      <div className="absolute bottom-[5%] grid grid-cols-2 sm:bottom-0">
        <div className="">
          <Image
            src="/images/accessories.png"
            alt="accessories"
            width={500}
            height={500}
            className="w-[100%]"
          />
        </div>
        <div className="space-y-5 sm:px-14">
          <h2 className="text-xl font-semibold uppercase sm:text-7xl">
            And just with the right accessories
          </h2>
          <h3 className="sm:text-2xl">
            <span className="hidden sm:block">
              From vibrant mouse clicks to crystal-clear soundscapes, these
              companions make every click an adventure. Elevate your laptop,
              express yourself, and enhance your experience with the magic of
              accessories.
            </span>
            <span className="sm:hidden">
              Elevate your laptop, express yourself, and enhance your experience
              with the magic of accessories.
            </span>
          </h3>
          <Button>explore</Button>
        </div>
      </div>
    </section>
  );
}
