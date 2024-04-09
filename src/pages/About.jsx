import React from "react";
import Inner from "../components/Inner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Inner>
      <section className="bg-[#600a18] font-josefin text-[#fdb9a9] relative">
        <Header></Header>
        <div className="px-5 py-10">
          <div className="mt-5">
            <div className="font-extrabold">English.</div>
            <p className="font-josefin">
              I am a Full-Stack Web Developer with a strong inclination towards
              web design, constantly improving my development and design skills.
              Currently, I work as a freelancer dedicated to helping my clients
              achieve their goals in web development. Committed to offering the
              best product quality. I am open to the opportunity to collaborate
              and devise innovative solutions.
            </p>
          </div>
          <div className="mt-5">
            <div className="font-extrabold">Spanish.</div>
            <p className="font-josefin">
              Soy un Desarrollador Web Full-Stack con una fuerte inclinacion
              hacia el diseño web, constantemente mejorando mis habilidades de
              desarrollo y diseño. Actualmente, Trabajo como freelancer dedicado
              a ayudar a mis clientes a lograr sus objetivos dentro del
              desarrollo web. Comprometido, a ofrecer la mejor calidad del
              producto. Estoy abierto a la oportunidad de colaborar e idear
              innovadoras soluciones.
            </p>
          </div>
          <div className="mt-5">
            <div className="font-extrabold">Skills.</div>
            <ul className="font-josefin">
              <li className="">JavaScript</li>
              <li className="">TypeScript</li>
              <li className="">Html5</li>
              <li className="">Css3</li>
              <li className="">React.js</li>
              <li>Next.js</li>
              <li>MySql</li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="font-extrabold">Idioms.</div>
            <ul className="font-josefin">
              <li>Spanish</li>
              <li>English</li>
            </ul>
          </div>
          
        </div>
        <Footer></Footer>
      </section>
    </Inner>
  );
}
