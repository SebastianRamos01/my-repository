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
  },
  enter: (i) => ({
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      ease: [0.7, 0, 0.84, 0]
    },
  }),
  exit: {
    opacity: 0,
  },
};

const titles = {
  initial: {
    y: 100
  },
  enter: (i) => ({
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
    },
  }),
  exit: {
    y: 100
  },
};

export default function Home() {
  
  const isMobile = useMediaQuery({ query: '(max-width: 470px)' })

  const title = ['F','R','O','N','T',' ','E','N','D',' ','D','E','V','E','L','O','P','E','R',]
  const title2 = ['&',' ','W','E','B',' ','D','E','S','I','G','N','E','R',]
  
  return (
    <Inner>
      <Header></Header>
      <main className="bg-[#ffffff] font-urbanist text-[#000000] h-[100dvh] overflow-hidden">
        <section className="h-full flex justify-center flex-col">
          <h3 className="font-bold lg:mx-20 mx-5">
            HELLO I'M FREELANCE
          </h3>
          <h1 className="font-bold lg:text-8xl relative lg:h-[180px] h-[75px] w-full text-4xl">
            <p className="absolute -left-8 whitespace-nowrap flex overflow-hidden">
              {title.map((word, i) => {
                return <motion.p 
                variants={titles}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                className=""
                key={i}>{word}</motion.p>
              })}
            </p>
            <p className="absolute whitespace-nowrap bottom-0 flex -right-10 overflow-hidden">
            {title2.map((word, i) => {
                return <motion.p 
                variants={titles}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                className=""
                key={i}
                >{word}</motion.p>
              })}
            </p>
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
          return <motion.div
            variants={perspective}
            custom={i}
            animate="enter"
            exit="exit"
            initial="initial"
            key={i}
            className='absolute' 
            style={styles}
            >
            <Link to={`/work/${work.title}`} className="">
              <div className="bg-slate-400 w-[310px] overflow-hidden h-[180px] relative">
                <img src={`/images/${work.main}`} alt="" className="p-1 absolute"/>
              </div>
            </Link>
          </motion.div>
        })}
      </main>
      <Footer></Footer>
    </Inner>
  );
}
