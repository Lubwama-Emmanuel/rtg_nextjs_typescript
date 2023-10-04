"use client";
import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  function HandleShowForm() {
    setShowForm((value) => !value);
  }
  // const clipPathValues = {
  //   sec1: "0 0, 100% 0, 80% 100%, 0% 100%",
  //   sec2: "0 0, 80% 0, 100% 100%, 0 100%",
  // };

  const clipPathValues = {
    sec1: "0 0, 100% 0, 100% 20%, 80% 100%, 0% 100%",
    sec2: "0% 0, 80% 0, 100% 80%, 100% 100%, 0 100%",
  };
  return (
    <footer className=" h-[100vh] bg-gradient-to-b from-emerald-400 to-emerald-900">
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec1})`,
        }}
        className="h-[50%] w-[100%] bg-white "
      >
        <div className=" m-auto grid w-[95%] gap-10 py-7 sm:grid-cols-[2fr_4fr]">
          <div>
            <Logo />
            <div className="mt-5">
              <div className="flex items-center space-x-2">
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-phone"></use>
                </svg>
                <p>+256-706039119</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-whatsapp"></use>
                </svg>
                <p>+256-763470663</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-envelope"></use>
                </svg>
                <p>rextechguy256@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex space-x-5">
              <h3 className="text-2xl">Have an Inquiry ?</h3>
              <Button
              // className=" rounded-full border border-emerald-400 px-4 pb-1 pt-2 text-xl font-bold uppercase leading-none text-emerald-800 "
              // handleClick={HandleShowForm}
              >
                {showForm ? `close form` : `open form`}
              </Button>
            </div>

            {showForm ? (
              <div className="space-y-3">
                <form className="flex flex-col space-y-3">
                  <div className="space-x-2">
                    <label className="capitalize">name</label>
                    <input
                      type="type"
                      placeholder="Enter Name"
                      className="w-[70%] rounded-full border border-emerald-400 px-2 "
                    />
                  </div>
                  <div className="space-x-2">
                    <label className="capitalize">phone</label>
                    <input
                      type="type"
                      placeholder="Enter Phone"
                      className="w-[70%] rounded-full border border-emerald-400 px-2 "
                    />
                  </div>
                  <div className="flex space-x-2">
                    <label className="capitalize">inquiry</label>
                    <input
                      type="type"
                      placeholder="State Inqury"
                      className="h-24 w-[70%] rounded-lg border border-emerald-400 px-2"
                    />
                  </div>
                </form>
                <Button>inquiry</Button>
              </div>
            ) : (
              <div>
                <h3 className="mb-3 text-2xl  sm:mb-2">
                  Subscribe to our newsLetter
                </h3>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-[70%] rounded-full border border-emerald-400 px-2 py-2 focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2 "
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          clipPath: `polygon(${clipPathValues.sec2})`,
        }}
        className="relative h-[50%] w-[100%] bg-white"
      >
        <div className="m-auto grid w-[95%] space-y-3 py-10 sm:grid-cols-3">
          <div>
            <h3 className="text-2xl">Search categories</h3>
            <ul>
              <li>Gaming</li>
              <li>Designing</li>
              <li>Gaming</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Blog</h3>
            <ul>
              <li>How to get laptop specifications ?</li>
              <li>How to get laptop specifications ?</li>
              <li>How to get laptop specifications ?</li>
              <li>How to get laptop specifications ?</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl">Social Links</h3>
            <div className="flex w-[100%] items-center space-x-2">
              <div>
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-youtube-square"></use>
                </svg>
              </div>
              <div>
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-tiktok"></use>
                </svg>
              </div>
              <div>
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-instagram"></use>
                </svg>
              </div>
              <div>
                <svg className=" h-7 w-7 fill-emerald-800">
                  <use xlinkHref="sprite.svg#icon-linkedin-square"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-[100%] text-center uppercase sm:text-xl">
          <p>&copy; copyright {new Date().getFullYear()} rex the tech guy</p>
        </div>
      </div>
    </footer>
  );
}
