import Inner from "../components/Inner";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { works } from "../data/data";

const perspective = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
  },
};

const text = "Hello!! I’m front-end developer and web designer who is passionate in creating elegant and creative stuff.";
const words = text.split(" ");

export default function Home() {
  return (
    <Inner>
      <Header></Header>
      <main className="bg-neutral-100 font-roboto text-[#2D2926] px-5">
        <section className="flex items-end h-[95dvh]">
          <h2 className="flex flex-wrap my-3 lg:w-[605px] text-3xl lg:text-4xl">
            {words.map((word, i) => {
              const isTargetPhrase = i >= 2 && i <= 6;
              return (
                <motion.p
                  variants={perspective}
                  custom={i}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  key={i}
                  className={`font-light mr-[6px] leading-tight ${
                    isTargetPhrase
                      ? " decoration-1 font-semibold underline-offset-4"
                      : ""
                  }`}
                >
                  {word}
                </motion.p>
              );
            })}
          </h2>
        </section>
        <section className="flex flex-col gap-3 lg:gap-4 lg:flex-row lg:flex-wrap">
          {works.map((work, i) => {
            return (
              <motion.div
                variants={perspective}
                  custom={i+5}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  key={i}
                className="flex justify-center rounded-lg relative h-[260px] lg:w-[49%] lg:h-[450px]"
                style={{ backgroundColor: work.color }}
              >
                <Link
                  to={`/work/${work.title}`}
                  className="flex w-full flex-row-reverse items-center"
                >
                  <div className="w-[40%] lg:w-[38%] h-[95%] lg:h-[90%] py-3 z-[5] mx-5">
                    <img
                      src={`/images/${work.img.one}`}
                      alt={work.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute top-0 left-0 m-2 lg:m-3">
                    <p className="font-extrabold text-neutral-100 leading-none text-5xl lg:text-6xl">
                      {work.title.toUpperCase()}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>
      </main>
      <Footer></Footer>
    </Inner>
  );
}
