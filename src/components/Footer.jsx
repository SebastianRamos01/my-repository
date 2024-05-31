import React from "react";

const ig = "https://www.instagram.com/_sbaramos"
const linkedin = "https://www.linkedin.com/in/sebastian-matias-ramos"

export default function Footer() {
  return (
    <footer className="font-urbanist w-full p-5 text-white">
      <div className="flex flex-col gap-5 bg-[#2d2926] p-5">
        <div>
          <p>Currently Available</p>
          <p className="font-semibold text-xl">Lets work together</p>
        </div>
        <ul className="flex flex-col gap-2">
          <a href={ig}>
            <p className="underline decoration-1 underline-offset-4">instagram</p>
          </a>
          <a
            href="mailto:sebasm.sr@gmail.com"
            className="underline decoration-1 underline-offset-4"
            >
              email
          </a>
          <a href={linkedin}>
            <p className="underline decoration-1 underline-offset-4">linkedin</p>
          </a>
        </ul>
      </div>
      <p className="text-black my-2">Code by Me@</p>
    </footer>
  );
}
