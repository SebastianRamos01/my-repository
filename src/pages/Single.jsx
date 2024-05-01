import React from "react";
import { useParams } from "react-router-dom";
import Inner from "../components/Inner";
import { works } from "../data/data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Single() {
  const { title } = useParams();

  const work = works.find((e) => e.title === title);

  return (
    <Inner>
      <Header></Header>
      <section className="bg-[#F4F4F2] font-roboto text-[#2D2926] px-5 pt-24">
        <div className="flex flex-col gap-5 lg:flex-row">
            <div className="bg-[#e3e3de] flex justify-center rounded relative max-w-[385px]">
            <div className="w-1/2 py-3 z-[5]">
                <img src={`/images/${work.img}`} alt={work.title} />
            </div>
            </div>
            <div className="bg-[#e3e3de] flex justify-center rounded relative max-w-[385px]">
            <div className="w-1/2 py-3 z-[5]">
                <img src={`/images/${work.img}`} alt={work.title} />
            </div>
            </div>
            <div className="bg-[#e3e3de] flex justify-center rounded relative max-w-[385px]">
            <div className="py-3 z-[5] flex items-center">
                <img src={`/images/${work.imgBig}`} alt={work.title} className=""/>
            </div>
            </div>
            <div className="bg-[#e3e3de] flex justify-center rounded relative max-w-[385px]">
            <div className="w- py-3 z-[5] flex items-center">
                <img src={`/images/${work.imgBig}`} alt={work.title} />
            </div>
            </div>
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
