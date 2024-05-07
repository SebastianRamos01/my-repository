import React from "react";
import Inner from "../components/Inner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Inner>
      <Header></Header>
      <section className="bg-[#F4F4F2] font-roboto text-[#2D2926] font-light pt-24">
            <div className="h-[200px] overflow-hidden relative max-w-[425px]">
              <img src="/images/photo.jpg" alt="photo" className="absolute -bottom-[200px]"/>
            </div>
        <div className="px-5">
          <div className="mt-5">
            <div className="">This is me!!</div>
            <p className="">
              I am a Full-Stack Web Developer with a strong inclination towards
              front-end development and web design, constantly improving my development and design skills.
              Currently, I work as a freelancer dedicated to helping my clients
              achieve their goals in web development. Committed to offering the
              best product quality. I am open to the opportunity to collaborate
              and devise innovative solutions.
            </p>
          </div>
          <div className="mt-5">This is some of my skills in</div>
          <div className="flex gap-5 mt-1">
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
              <li className="underline">Design</li>
              <li className="underline">Development</li>
              <li className="underline">Full Web</li>
            </ul>
          </div>
          <div className="mt-5">
            <p>
              Send me a message or an email
            </p>
            <a href="mailto:sebasm.sr@gmail.com" className="underline">sebasm.sr@gmail.com</a>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </Inner>
  );
}
