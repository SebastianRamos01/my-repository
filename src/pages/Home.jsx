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

  const text = "Currently working as a freelancer dedicated to helping my clients achieve their goals in web development."
  const titles = [
    "Freelance",
    "Front end developer",
    "& Web designer",
    "Based in",
    "Buenos Aires, Arg",
    "Lets Talk Here",
  ];

  return (
    <Inner>
      <main className="font-urbanist text-[#1c140d]">
        <Header></Header>
        <section className="flex flex-col md:flex-row md:h-[100dvh]">
          <div className="h-full md:min-w-[378px]">
            <img src="/images/photo.jpg" alt="" className="h-full w-full"/>
          </div>
          <div className="flex flex-col md:justify-between m-5 md:m-10 gap-14">
            <div>
              <p className="">{titles[0]}</p>
              <p className="text-2xl font-semibold">{titles[1]}</p>
              <p className="text-2xl font-semibold">{titles[2]}</p>
            </div>
            <div className="w-1/2 mx-auto text-center">
              <p className="text-xl">{text}</p>
            </div>
            <div className="text-right">
              <p >{titles[3]}</p>
              <p className="text-2xl font-semibold">{titles[4]}</p>
              <p className="text-2xl font-semibold">{titles[5]}</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col mx-5 py-20 gap-10 md:flex-row border-y border-black">
          {works.map((work, i) => {
            return (
              <motion.div
                variants={perspective}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                key={i}
                className="bg-[#2d2926] text-white p-5 flex flex-col gap-5"
              >
                <p>
                  {`#${i + 1}`}
                </p>
                <Link to={`/work/${work.title}`} className="">
                  <div className="overflow-hidden h-[200px] lg:h-[430px]">
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
                </Link>
                <p className="">                      
                  {work.rol}
                </p>
              </motion.div>
            );
          })}
        </section>
        <section className="mx-5 py-10">
          <p className="my-5 md:text-center font-semibold text-2xl">I can help you whit</p>
          <div className="flex flex-col md:flex-row gap-5 text-lg">
            <div>
              <p className="font-medium text-xl">Design</p>
              <p>Currently working as a freelancer dedicated to helping my clients achieve their goals in web development.</p>
            </div>
            <div>
              <p className="font-medium text-xl">Develop</p>
              <p>Currently working as a freelancer dedicated to helping my clients achieve their goals in web development.</p>
            </div>
            <div>
              <p className="font-medium text-xl">Full Web</p>
              <p>Currently working as a freelancer dedicated to helping my clients achieve their goals in web development.</p>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </Inner>
  );
}
