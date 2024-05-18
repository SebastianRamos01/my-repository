import { useParams } from "react-router-dom";
import Inner from "../components/Inner";
import { works } from "../data/data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

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
  const image = work.phone;

  return (
    <Inner>
      <Header></Header>
      <section className="font-urbanist text-[#2D2926] px-5 py-20">
        <div className="my-4 relative w-fit">
          <p className="text-4xl font-bold lg:text-6xl">
            {work.title.toUpperCase()}
          </p>
          <motion.div
            variants={bg}
            className="bg-[#2D2926] absolute top-0 h-full w-full right-0"
          ></motion.div>
        </div>
        <div className="bg-[#2D2926] p-2 lg:p-4 flex justify-between mb-3 rounded relative">
          <div className="w-[49%] h-[200px] overflow-hidden lg:h-[800px] md:h-[350px]">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
          <div className="w-[49%] h-[200px] overflow-hidden relative lg:h-[800px] md:h-[350px]">
            <img
              src={`/images/${work.main}`}
              alt={work.title}
              className="absolute bottom-0"
            />
          </div>
          <motion.div variants={bg} className="absolute rounded bg-white h-full w-full bottom-0 left-0"></motion.div>
        </div>
        <div className="lg:my-10">
          <p className="text-4xl">{work.header.toUpperCase()}</p>
        </div>
        <div className="bg-[#2D2926] p-2 lg:p-4 flex flex-col gap-2 lg:gap-4 items-center justify-between my-3 rounded">
          <div className="h-[200px] md:h-[350px] lg:h-[800px] overflow-hidden">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
          <div className="w-[80%] h-[160px] md:h-[300px] lg:h-[500px] overflow-hidden">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
          <div className="w-[32%] h-[200px] lg:h-[700px] overflow-hidden relative">
            <img
              src={`/images/${work.secondary}`}
              alt={work.title}
              className="absolute"
            />
          </div>
        </div>
        <div className="py-2">
          <p className="font-bold">PROJECT CONTRIBUTION</p>
          <p className="">{work.rol}</p>
        </div>
        <div className="py-2">
          <p className="font-bold">PROJECT OVERVIEW</p>
          <p className="">{work.description}</p>
        </div>
        <div className="bg-[#2D2926] p-2 lg:p-4 flex justify-between my-2 rounded">
          <div className="w-[60%] lg:w-[78%]">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
          <div className="w-[35%] lg:w-[20%]">
            <img
              src={`/images/${work.secondary}`}
              alt={work.title}
              className=""
            />
          </div>
        </div>
      </section>
    </Inner>
  );
}
