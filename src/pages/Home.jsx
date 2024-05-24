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

const circle = {
  initial: {
    scale: 0
  },
  enter: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    scale: 1
  }
}

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
    "hello i'm freelance",
    "front end developer",
    "& web designer",
  ];

  return (
    <Inner>
      <Header></Header>
      <main className="font-urbanist text-[#1c140d] overflow-hidden" >
        <section className="flex justify-center flex-col h-[95dvh] text-white relative" ref={elem}>
          <motion.div 
            enter={{scale}}
            style={{ scale }}
            className="bg-[#1c140d] rounded-full w-[35rem] h-[35rem] absolute -top-5 -left-16">
          </motion.div>
          <h3 className="font-bold z-10 lg:mx-40 mx-5">{titles[0].toUpperCase()}</h3>
          <h1 className="font-bold lg:text-7xl relative gap-1 w-full text-3xl flex flex-col px-5 lg:px-20">
            <span className="whitespace-nowrap flex overflow-hidden relative w-fit">
              <p>{titles[1].toUpperCase()}</p>
            </span>
            <span className="whitespace-nowrap flex overflow-hidden relative w-fit self-end">
              <p>{titles[2].toUpperCase()}</p>
            </span>
          </h1>
        </section>
        <section className="flex flex-col mx-5 gap-2">
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
                <Link to={`/work/${work.title}`} className="h-fit flex p-5 lg:p-10 py-16 rounded-lg flex-col">
                  <div className="overflow-hidden h-[200px] lg:h-[450px] border-[#1c140d] border-8 rounded">
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
