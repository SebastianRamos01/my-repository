import Inner from "../components/Inner";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { works } from "../data/data";
import { useMediaQuery } from "react-responsive";

const perspective = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  enter: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.5,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.4,
  },
};

const bg = {
  initial: {
    width: "100%",
  },
  enter: {
    width: "0%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    width: "100%",
  },
};

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 470px)" });
  const titles = [
    "hello i'm freelance",
    "front end developer",
    "& web designer",
  ];

  return (
    <Inner>
      <Header></Header>
      <main className="font-urbanist text-[#2d2926] h-[100dvh] overflow-hidden">
        <section className="h-full flex justify-center flex-col">
          <h3 className="font-bold lg:mx-40 mx-5">{titles[0].toUpperCase()}</h3>
          <h1 className="font-bold lg:text-7xl relative gap-1 w-full text-3xl flex flex-col px-5 lg:px-20">
            <span className="whitespace-nowrap flex overflow-hidden relative w-fit">
              <p>{titles[1].toUpperCase()}</p>
              <motion.div
                variants={bg}
                className="bg-[#2D2926] absolute top-0 h-full w-full right-0 rounded"
              ></motion.div>
            </span>
            <span className="whitespace-nowrap flex overflow-hidden relative w-fit self-end">
              <p>{titles[2].toUpperCase()}</p>
              <motion.div
                variants={bg}
                className="bg-[#2D2926] absolute top-0 h-full w-full rounded"
              ></motion.div>
            </span>
          </h1>
        </section>
        {works.map((work, i) => {
          const styles = {
            top: work.top.desktop,
            right: work.rigth.desktop,
          };

          if (isMobile) {
            styles.top = work.top.phone;
            styles.right = work.rigth.phone;
          }
          return (
            <motion.div
              variants={perspective}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
              key={i}
              className="absolute"
              style={styles}
            >
              <Link to={`/work/${work.title}`} className="h-fit flex p-1" style={{backgroundColor: work.color}}>
                <div className="w-[280px] overflow-hidden h-[160px]">
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
            </motion.div>
          );
        })}
      </main>
      <Footer></Footer>
    </Inner>
  );
}
