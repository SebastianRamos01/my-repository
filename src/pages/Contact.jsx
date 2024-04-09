import React from "react";
import Inner from "../components/Inner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Inner>
      <section className="bg-[#600a18] font-biz text-[#fdb9a9] h-screen">
        <Header></Header>
        <div className="flex items-center h-full px-5">
          <div className="">
            <div className="text-[35px]">GET IN TOUCH.</div>
            <ul className="font-josefin my-3">
                <span className="font-extrabold">
                    Socials.
                </span>
              <li>sebasm.sr@gmail.com</li>
              <li>
                <a
                  href="https://www.instagram.com/_sbaramos"
                  className="underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SebastianRamos01"
                  className="underline"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </Inner>
  );
}
