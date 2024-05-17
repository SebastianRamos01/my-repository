import React from "react";
import Inner from "../components/Inner";
import Header from "../components/Header";

export default function About() {
  return (
    <Inner>
      <Header></Header>
      <section className="font-urbanist text-[#2D2926] font-light pt-24">
        <div className="absolute left-[-2%]">
          <p className="font-bold text-4xl lg:text-6xl">HELLO IT'S ME</p>
        </div>
        <div className="px-5 flex flex-col lg:flex-row mt-10 lg:mt-[60px] w-full">
          <div className="bg-slate-200">
            <img src="/images/photo.jpg" alt="photo" className="p-1" />
          </div>
          <div className="lg:mx-5">
            <div className="">
              <div className="">
                <p className="">
                  I am a Full-Stack Web Developer with a strong inclination
                  towards front-end development and web design, constantly
                  improving my development and design skills. Currently, I work
                  as a freelancer dedicated to helping my clients achieve their
                  goals in web development. Committed to offering the best
                  product quality. I am open to the opportunity to collaborate
                  and devise innovative solutions.
                </p>
              </div>
              <div className="mt-5 font-bold">
                THIS ARE SOME OF MY SKILLS IN
              </div>
              <div className="flex gap-5 mt-1">
                <ul className="">
                  <p className=" font-bold">DEVELOPMENT</p>
                  <li className="">TypeScript</li>
                  <li className="">Html5</li>
                  <li className="">Css3</li>
                  <li className="">React.js</li>
                  <li>Next.js</li>
                  <li>MySql</li>
                </ul>
                <ul className="">
                  <p className="font-bold">DESIGN</p>
                  <li className="">Figma</li>
                  <li>UX/UI Design</li>
                  <li>Movile optimizacion</li>
                  <li>SEO</li>
                </ul>
              </div>
              <div className="mt-5">
                <div className=" font-bold">THIS ARE MY SERVICES</div>
                <ul className="">
                  <li className="font-bold my-3">
                    <p className="">DESIGN</p>
                    <span className="font-normal">
                      Creating visually attractive and easy-to-use websites.
                      <br />
                      Design user interfaces (UI) that are intuitive and
                      attractive.
                      <br />
                      Design of websites adaptable to all devices (responsive).
                    </span>
                  </li>
                  <li className="font-bold my-3">
                    <p className="">DEVELOPMENT</p>
                    <span className="font-normal">
                      Turn your ideas into functional and dynamic websites.
                      <br />
                      Using the latest web technologies to create cutting-edge
                      user experiences.
                      <br />
                      Maintenance and updating of your website to guarantee its
                      correct functioning.
                    </span>
                  </li>
                  <li className="font-bold mt-3">
                    <p className="">DEVELOPMENT</p>
                    <span className="font-normal">
                      I offer a comprehensive service that ranges from the
                      conception of your idea to the launch and maintenance of
                      your website.
                      <br />
                      I create custom websites that fit your needs and budget.
                      <br />I work closely with you to ensure your website is a
                      success.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
              <div className="px-5 py-3">
                <div className="flex flex-col">
                  <p className="font-bold">HAVE AN IDEA</p>
                  <p className="font-bold text-4xl lg:text-8xl">LETS WORK</p>
                  <a
                    href="https://www.instagram.com/_sbaramos"
                    className="underline font-medium"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="mailto:sebasm.sr@gmail.com"
                    className="underline font-medium"
                  >
                    EMAIL
                  </a>
                </div>
              </div>
      </section>
    </Inner>
  );
}
