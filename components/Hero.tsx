import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className={`bg-cover bg-center w-full relative h-[92vh] padding`}
      style={{ backgroundImage: 'url("/Hero.jpeg")' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/Hero.jpeg")', filter: "blur(1px)" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col justify-start items-center gap-8 text-white">
        <h1 className="text-6xl font-bold text-center">
          Welcome To
          <span className="block mt-4">Shree Janak Secondary School</span>{" "}
        </h1>
        <p>We believe in providing education for everyone</p>
        <Button asChild className= "bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
