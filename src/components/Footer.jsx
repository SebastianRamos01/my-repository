import React from "react";

const ig = "https://www.instagram.com/_sbaramos"
const linkedin = "https://www.linkedin.com/in/sebastian-matias-ramos"

export default function Footer() {
  return (
    <footer className="font-urbanist font-normal flex w-full justify-between text-xs p-5">
      <div className="flex justify-between items-center w-full h-10">
        <a href={ig}>
          <p className="underline decoration-1 underline-offset-4">INSTAGRAM</p>
        </a>
        <a
          href="mailto:sebasm.sr@gmail.com"
          className="underline decoration-1 underline-offset-4"
          >
            EMAIL
        </a>
        <a href={linkedin}>
          <p className="underline decoration-1 underline-offset-4">LINKEDIN</p>
        </a>
      </div>
    </footer>
  );
}
