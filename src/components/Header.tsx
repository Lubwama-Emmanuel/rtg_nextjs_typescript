"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Links from "../ui/Links";
import Logo from "../ui/Logo";

export default function Header() {
  const [isSearch, setisSearch] = useState(false);

  function HandleToggleSearch() {
    setisSearch((value) => !value);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-10 m-auto hidden max-w-[100%] items-center justify-between bg-white px-10 py-2 shadow-sm shadow-emerald-200/50 sm:flex">
      <div className="text-center">
        <Logo />
      </div>
      <Links styles={"flex justify-between space-x-12 text-xl uppercase"} />
      <div className="flex w-auto items-center space-x-5">
        {isSearch ? (
          <div className="flex items-center justify-between rounded-full border border-emerald-400 pr-3">
            <input
              type="text"
              placeholder="Search for your favourite"
              className=" w-56 rounded-full border-none px-3 py-1 transition-all duration-300 focus:w-64 focus:outline-none"
            />
            <button>
              <svg className="ml-[-30px] h-7 w-7 fill-emerald-800">
                <use xlinkHref="sprite.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        ) : (
          <button onClick={() => HandleToggleSearch()}>
            <svg className="h-7 w-7 fill-emerald-800">
              <use xlinkHref="sprite.svg#icon-search"></use>
            </svg>
          </button>
        )}
        <Button>shop</Button>
      </div>
    </header>
  );
}
