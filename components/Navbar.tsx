"use client";
import React, { useEffect, useState } from "react";
import Links from "./Links";
import { ModeToggle } from "./ui/modeToggle";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "animate.css";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Event",
    path: "/event",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the navbar when the route changes
    setToggleMenu(false);
  }, [pathname]);

  return (
    <nav className="padding-x py-8 flex justify-between items-center w-full h-[50px]">
      <Image src="/logo.jpg" alt="logo" width={50} height={50} sizes="100vw" />
      <div className="flex justify-between items-center gap-8 max-lg:hidden">
        <Links links={navLinks} />
        <ModeToggle />
      </div>

      <div className="flex items-center gap-8 lg:hidden">
        <ModeToggle />
        <GiHamburgerMenu onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className={`w-[300px] h-screen flex justify-between items-start px-6 py-6 fixed top-0 right-0 z-10 bg-slate-50  dark:bg-black overflow-x-hidden animate__animated animate__animated ${toggleMenu ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__fast`}>
            <div className="flex-1 flex flex-col gap-12 px-8 py-4 font-semibold text-2xl cursor-pointer mt-16">
              <Links links={navLinks} />
            </div>
            <MdClose
              className="cursor-pointer"
              fontSize={28}
              onClick={() => setToggleMenu(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
