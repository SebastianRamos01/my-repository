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
    scale: 0.7
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

const titles = {
  initial: {
    y: 100
  },
  enter: (i) => ({
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      ease: [0.76, 0, 0.24, 1],
      duration: 0.5
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
            <span className="absolute -left-3 md:left-1 lg:left-5 whitespace-nowrap flex overflow-hidden">
              {title.map((letter, i) => {
                const hasSpace = letter === ' ';
                const className = hasSpace ? 'mr-2 lg:mr-4' : '';
                
                return <motion.p 
                variants={titles}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                className={className}
                key={i}>{letter}</motion.p>
              })}
            </span>
            <span className="absolute whitespace-nowrap bottom-0 flex right-1 lg:right-5 overflow-hidden">
            {title2.map((letter, i) => {
                const hasSpace = letter === ' ';
                const className = hasSpace ? 'mr-2 lg:mr-4' : '';

                return <motion.p 
                variants={titles}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
                className={className}
                key={i}
                >{letter}</motion.p>
              })}
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
              <div className="bg-[#efefef] w-[310px] overflow-hidden h-[180px] relative">
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
