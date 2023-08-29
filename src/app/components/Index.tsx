// "use client";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Index = () => {
   const [text] = useTypewriter({
     words: [
         "Turn the Page, Trade the Book. Unleash the Magic of Reading through Exchange, Buy,and Sell."
     ],
     loop: true,
     typeSpeed: 30,
     deleteSpeed: 10,
     delaySpeed: 2000,
   });
  return (
    <div className=" w-full h-screen  mx-auto flex flex-col  justify-center items-center">
      <h1 className="text-2xl md:text-4xl justify-center items-center uppercase  font-bold  text-slate-50">
        Bookaholics' Hub
      </h1>
      <p className="text-base md:text-lg font-semibold mt-2 text-slate-50">
         {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" /> 
      </p>
      <div className="flex flex-col items-center justify-center  pt-4 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-md bg-orange-900 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-hoverColor/40"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-orange-900 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-hoverColor/40 "
                  >
                    Sign In
                  </Link>
                </div>  

    </div>
  );
};

export default Index;