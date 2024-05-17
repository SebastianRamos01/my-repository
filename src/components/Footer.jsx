import React from "react";

const ig = "https://www.instagram.com/_sbaramos"

export default function Footer() {
  return (
    <footer className="font-urbanist font-normal absolute bottom-0 flex w-full justify-between text-sm p-5">
      <div className="flex justify-between items-center w-full h-10">
        <a href={ig}>
          <p className="underline decoration-1 underline-offset-4">INSTAGRAM</p>
        </a>
      </div>
    </footer>
  );
}
