import Inner from "../components/Inner";
import Header from "../components/Header";
import { delay, motion } from "framer-motion";
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

const block = {
  initial: {
    width: '100%'
  },
  enter: {
    width: '0px',
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
  }},
  exit: {
    width: '100%'
  }
}

const titlesPerspective = {
  initial: {
      y: '100%',
      opacity: 1
    },
    enter: (i) => ({
      y : 0,
      opacity: 1,
      transition: {
          delay: 0.3 + (i * 0.4),
          ease: [0.76, 0, 0.24, 1],
          duration: 1
      }
  }),
  exit: {
    y: '100%'
  }
}

export default function Home() {

  const text = "Currently working as a freelancer dedicated to helping my clients achieve their goals in web development."
  const topTitles = [
    "Freelance",
    "Front end Developer",
    "& Web designer"
  ]
  const botTitles = [
    "Based in",
    "Buenos Aires, Arg",
    "Lets Talk Here",
  ];

  return (
    <Inner>
      <main className="font-urbanist text-[#2d2926]">
        <Header></Header>
        <section className="flex flex-col md:flex-row md:h-[90dvh] lg:h-[100dvh] md:justify-between">
          <div className="flex-shrink-0 relative">
            <img src="/images/photo.jpg" alt="" className="h-full w-full"/>
            <motion.div variants={block} className="bg-white absolute right-0 bottom-0 h-full w-full">
            </motion.div>
          </div>
          <div className="flex flex-col md:justify-between p-5 lg:mx-10 gap-14">
            <div className="text-2xl overflow-hidden">
              {topTitles.map((elem, i) => {
                return (
                  <div
                    className='overflow-hidden'
                    key={i}>
                      <motion.p 
                        variants={titlesPerspective} 
                        custom={i} 
                        className={i === 0 ? 'text-base' : 'font-semibold'}>
                        {elem}
                      </motion.p>
                  </div>
                )
              })}
            </div>
            <div className="w-1/2 mx-auto text-center">
              <p className="text-xl">{text}</p>
            </div>
            <div className="text-right text-2xl overflow-hidden">
            {botTitles.map((elem, i) => {
                return (
                  <div
                    key={i}
                    className='overflow-hidden'>
                      <motion.p 
                        variants={titlesPerspective} 
                        custom={i} 
                        
                        className={i === 0 ? 'text-base' : 'font-semibold'}>
                        {elem}
                      </motion.p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section className="mx-5 py-12 md:mx-10">
          <ul className="flex flex-col justify-between md:flex-row flex-wrap gap-4">
            {works.map((work, i) => {
              return (
                <motion.div
                  variants={perspective}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={i}
                  className="bg-[#2d2926] text-white p-5 flex flex-col gap-5 lg:max-w-[49%]"
                >
                  <p>
                    {`#${i + 1}`}
                  </p>
                  <Link to={`/work/${work.title}`} className="">
                    <div className="overflow-hidden h-[180px] lg:h-[280px]">
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
          </ul>
        </section>
        <section className="mx-5 pb-10 md:mx-10">
          <ul className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between py-5">
              <p className="font-semibold text-2xl">Web Design</p>
              <p>Create your ideal digital presence with a personalized and functional website.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between border-y border-[#2d2926] py-5">
              <p className="font-semibold text-2xl">Web Development</p>
              <p>Transform your vision into a digital reality with a custom web design.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between py-5">
              <p className="font-semibold text-2xl">Full Website</p>
              <p>Create a strong digital presence with a full web design and development service.</p>
            </div>
          </ul>
        </section>
        <Footer></Footer>
      </main>
    </Inner>
  );
}
