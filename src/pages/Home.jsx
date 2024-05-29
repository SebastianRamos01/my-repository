import Inner from "../components/Inner";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { works } from "../data/data";
import { useEffect, useRef } from "react";

const perspective = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  enter: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.4,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.7,
  },
};

export default function Home() {

  const elem = useRef(null)
  const { scrollYProgress } = useScroll({
    target: elem,
    offset: ["start end", "end start"]
  })
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1])
  
  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log(e))
  // }, [])

  const titles = [
    "Freelance",
    "Front end developer",
    "& Web designer",
  ];
  const secondaryTitles = [
    "Based in",
    "Buenos Aires, Arg",
    "& web designer",
  ];

  return (
    <Inner>
      <Header></Header>
      <main className="font-urbanist text-[#1c140d]" >
        <section className="h-[95dvh] bg-gradient-to-br from-blue-50 via-indigo-200 to-violet-50" ref={elem}>
            <div className="flex flex-col h-full justify-center gap-12 lg:gap-16 mx-5 lg:mx-28">
              <div className="">
                <h3 className="">{titles[0]}</h3>
                <h1 className="w-fit text-2xl lg:text-3xl h-12 lg:h-[58px]">
                    <p>{titles[1]}</p>
                    <p className="w-full text-right">{titles[2]}</p>
                </h1>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="text-right">{secondaryTitles[0]}</h3>
                <h1 className="text-2xl lg:text-3xl h-[70px]">
                    <p>{secondaryTitles[1]}</p>
                    <a className="underline text-left w-full decoration-1 underline-offset-4" href="mailto:sebasm.sr@gmail.com">Get in touch</a>
                </h1>
              </div>
            </div>
        </section>
        <section className="text-[#1c140d] my-10 lg:mx-10 mx-5">
          <p className="lg:text-2xl font-semibold w-72">
            Currently working as a freelancer dedicated to helping my clients achieve their goals
            in web development. Committed to offering the best product
            quality.
          </p>
        </section>
        <section className="flex flex-col mx-5 lg:mx-10 gap-4">
          {works.map((work, i) => {
            return (
              <motion.div
                variants={perspective}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                key={i}
                className="rounded-lg bg-[#efefef] z-10"
              >
                <Link to={`/work/${work.title}`} className="h-fit flex p-5 lg:p-16 lg:my-4 my-16 rounded-lg flex-col">
                  <div className="overflow-hidden h-[200px] lg:h-[500px] border-[#1c140d] border-8 rounded">
                    <motion.img
                      src={`/images/${work.main}`}
                      alt=""
                      className=""
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      />
                  </div>
                  <div className="my-5">
                      <div className="font-bold">
                        {work.title.toUpperCase()}
                      </div>
                      <span>
                        {work.rol}
                      </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>
        <Footer></Footer>
      </main>
    </Inner>
  );
}
