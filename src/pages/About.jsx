import React from "react";
import Inner from "../components/Inner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Inner>
      <Header></Header>
      <section className="bg-[#F4F4F2] font-roboto text-[#2D2926] px-5 font-extralight">
        <div className="py-10">
          <div className="mt-5">
            <div className="rounded-full w-[335px] h-[335px] overflow-hidden relative">
              <img src="/images/photo.jpg" alt="photo" className="absolute -bottom-16"/>
            </div>
            <div className="">This is me!!</div>
            <p className="font-josefin">
              I am a Full-Stack Web Developer with a strong inclination towards
              front-end development and web design, constantly improving my development and design skills.
              Currently, I work as a freelancer dedicated to helping my clients
              achieve their goals in web development. Committed to offering the
              best product quality. I am open to the opportunity to collaborate
              and devise innovative solutions.
            </p>
          </div>
          <div className="mt-5">This is some of my skills in</div>
          <div className="flex gap-5">
            <ul className="">
              <p className="underline underline-offset-4 decoration-1">Development</p>
              <li className="">TypeScript</li>
              <li className="">Html5</li>
              <li className="">Css3</li>
              <li className="">React.js</li>
              <li>Next.js</li>
              <li>MySql</li>
            </ul>
            <ul className="">
              <p className="underline underline-offset-4 decoration-1">Design</p>
              <li className="">Figma</li>
              <li>UX/UI Design</li>
              <li>Movile optimizacion</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="">This are my services</div>
            <ul className="">
              <li>Design</li>
              <li>Development</li>
              <li>Full Web</li>
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </Inner>
  );
}
