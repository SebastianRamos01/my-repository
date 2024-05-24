import { useParams } from "react-router-dom";
import Inner from "../components/Inner";
import { works } from "../data/data";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

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

export default function Single() {
  const { title } = useParams();

  const work = works.find((e) => e.title === title);

  return (
    <Inner>
      <Header></Header>
      <section className="font-urbanist text-[#2D2926] px-5 pt-20">
        <div className="my-4 relative w-fit">
          <p className="text-4xl font-bold lg:text-6xl">
            {work.title.toUpperCase()}
          </p>
          <motion.div
            variants={bg}
            className="bg-[#2D2926] absolute top-0 h-full w-full right-0 rounded"
          ></motion.div>
        </div>
        <div className="bg-[#efefef] p-5 lg:p-10 flex justify-between rounded relative">
          <div className="h-[200px] overflow-hidden lg:h-[800px] md:h-[350px] border-[#1c140d] border-8 rounded">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
          <motion.div variants={bg} className="absolute rounded bg-[#2D2926] h-full w-full bottom-0 left-0"></motion.div>
        </div>
        <div className="my-10">
          <p className="text-4xl">{work.header.toUpperCase()}</p>
        </div>
        <div className="bg-[#efefef] p-5 lg:p-10 rounded relative flex justify-center">
          <div className="h-[510px] w-80 lg:h-[550px] overflow-hidden relative border-[#1c140d] border-4 rounded">
            <img
              src={`/images/${work.secondary}`}
              alt={work.title}
              className="absolute"
            />
          </div>
          <motion.div variants={bg} className="absolute rounded bg-[#1c140d] h-full w-full bottom-0 left-0"></motion.div>
        </div>
        <div className="my-10">
          <div className="py-2">
            <p className="font-bold">PROJECT CONTRIBUTION</p>
            <p className="">{work.rol}</p>
          </div>
          <div className="py-2">
            <p className="font-bold">PROJECT OVERVIEW</p>
            <p className="">{work.description}</p>
          </div>
        </div>
        <div className="bg-[#efefef] p-5 lg:p-10 flex justify-between my-2 rounded">
          <div className="border-[#1c140d] border-8 rounded">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
        </div>
        <div className="bg-[#efefef] p-5 lg:p-10 flex justify-center my-2 rounded">
          <div className="border-[#1c140d] border-4 rounded-lg">
            <img
              src={`/images/${work.secondary}`}
              alt={work.title}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Inner>
  );
}
