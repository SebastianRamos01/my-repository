import React from "react";
import { useParams } from "react-router-dom";
import Inner from "../components/Inner";
import { works } from "../data/data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Single() {
  const { title } = useParams();

  const work = works.find((e) => e.title === title);
  const image = work.img

  return (
    <Inner>
      <Header></Header>
      <section className="font-roboto text-[#2D2926] px-5 pt-24 bg-neutral-100">
        <div>
          <p className="text-3xl lg:text-4xl font-extralight my-1">
            {work.header}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4 lg:flex-row lg:flex-wrap">
          {Object.values(image).map((elem, i) => (
            <div className="flex justify-center items-center rounded-lg relative h-[260px] lg:w-[49%] lg:h-[450px]" 
              key={i}
              style={{backgroundColor: work.color}}>
            <div className="w-[40%] lg:w-[40%] h-[95%] lg:h-[95%] py-3 z-[5] mx-5">
                    <img
                      src={`/images/${elem}`}
                      alt={work.title}
                      className="w-full h-full rounded-md"
                    />
                  </div>
            </div>
                ))}
        </div>
        <div className="py-5">
          <p className="font-normal">
            Project Detail
          </p>
            <p className="font-light">
                {work.description}
            </p>
        </div>
      </section>
        <Footer></Footer>
    </Inner>
  );
}
