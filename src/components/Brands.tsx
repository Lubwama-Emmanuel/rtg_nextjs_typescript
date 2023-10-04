import Image from "next/image";

export default function Brands() {
  return (
    <section className="mb-20  text-center">
      <h3 className="mb-5 text-2xl">Supported brands</h3>
      <div className=" flex items-center justify-center space-x-10">
        <Image
          width={100}
          height={100}
          alt="lenovo logo"
          src="/images/lenovo.svg"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <Image
          width={100}
          height={100}
          alt="hp logo"
          src="/images/hp.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <Image
          width={100}
          height={100}
          alt="acer logo"
          src="/images/acer.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
        <Image
          width={100}
          height={100}
          alt="dell logo"
          src="/images/dell.png"
          className="w-20 transition-all duration-300 sm:w-24 sm:hover:scale-150"
        />
      </div>
    </section>
  );
}
