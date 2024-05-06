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
      <section className="font-roboto text-[#2D2926] px-5 pt-24 bg-[#F4F4F2] lg:h-screen">
        <div>
          <p className="text-3xl lg:text-4xl font-extralight my-1">
            {work.header}
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row" >
          {Object.values(image).map((elem, i) => (
            <div className="flex justify-center rounded relative max-w-[385px]" 
              key={i}
              style={{backgroundColor: work.color}}>
            <div className="w-1/2 py-3 z-[5]">
                <img src={`/images/${elem}`} alt="" />
            </div>
            </div>
                ))}
        </div>
        <div>
            <p className="font-light">
                {work.description}
            </p>
        </div>
      </section>
        <Footer></Footer>
    </Inner>
  );
}
