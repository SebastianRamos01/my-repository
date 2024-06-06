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
      <section className="font-urbanist text-[#2D2926] mx-5 md:mx-10 py-14">
        <div className="my-4 w-fit">
          <p className="text-2xl font-bold">
            {work.title}
          </p>
        </div>
        <div className="bg-[#2d2926] p-5 lg:p-10 flex justify-between rounded relative">
          <div className="h-[200px] overflow-hidden lg:h-[480px] md:h-[350px]">
            <img src={`/images/${work.main}`} alt={work.title} className="" />
          </div>
        </div>
        <div className="my-10">
          <p className="text-xl">{work.header}</p>
        </div>
        <div className="bg-[#2d2926] p-5 lg:p-10 rounded relative flex justify-center">
          <div className="h-[510px] w-80 lg:h-[550px] overflow-hidden relative">
            <img
              src={`/images/${work.secondary}`}
              alt={work.title}
              className="absolute"
            />
          </div>
        </div>
        <div className="my-10">
          <div className="py-2">
            <p className="font-bold">Project Contribuion</p>
            <p className="">{work.rol}</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Project Overview</p>
            <p className="">{work.description}</p>
          </div>
        </div>
        <div className="bg-[#2d2926] p-5 lg:p-10 flex justify-between my-2 rounded">
          <div className="">
            <img src={`/images/${work.main}`} alt={work.title} className=""/>
          </div>
        </div>
        <div className="bg-[#2d2926] p-5 lg:p-10 flex justify-center my-2 rounded">
          <div className="">
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
