import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "index",
    to: "/",
  },
  {
    name: "email",
    to: "mailto:sebasm.sr@gmail.com",
  },
  {
    name: "instagram",
    to: "https://www.instagram.com/_sbaramos",
  },
  {
    name: "linkedin",
    to: "https://www.linkedin.com/in/sebastian-matias-ramos",
  },
];

const dpNav = {
  initial: {
    height: "0px",
  },
  enter: {
    height: "100dvh",
  },
  exit: {
    height: "0px",
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-urbanist w-full absolute top-0 z-10 text-white text-sm">
      <nav className="flex justify-between items-center w-full p-5 md:px-10">
        <div className="flex items-center justify-center font-semibold">
          <Link to={"/"} className={isOpen ? "text-white" : "text-[#2d2926]"}>
            Sebastian
            <br />
            Ramos.
          </Link>
        </div>
        <div className="">
          <div className="rounded-2xl justify-center flex lg:hidden">
            <Link
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className={
                isOpen
                  ? "py-1 px-8 rounded-2xl bg-white text-[#2d2926]"
                  : "py-1 px-8 rounded-2xl bg-[#2d2926]"
              }
            >
              {isOpen ? "close" : "menu"}
            </Link>
          </div>
          {isOpen && <DisplayNav />}
          <ul className="bg-[#2d2926] rounded-2xl h-8 text-center lg:flex items-center px-5 hidden">
            {navLinks.map((elem, i) => {
              return (
                <Link key={i} to={elem.to} className="px-4">
                  {elem.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function DisplayNav() {
  return (
    <motion.ul
      variants={dpNav}
      className="flex flex-col gap-4 items-center absolute h-[100dvh] justify-center -z-10 w-full bg-[#2d2926] left-0 top-0"
    >
      {navLinks.map((elem, i) => {
        return (
          <Link key={i} to={elem.to} className="px-4">
            {elem.name}
          </Link>
        );
      })}
    </motion.ul>
  );
}
