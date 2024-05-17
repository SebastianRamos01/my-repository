import React from "react";
import { useParams } from "react-router-dom";
import Inner from "../components/Inner";
import { works } from "../data/data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Single() {
  const { title } = useParams();

  const work = works.find((e) => e.title === title);
  const image = work.phone

  return (
    <Inner>
      <Header></Header>
      <section className="font-urbanist text-[#2D2926] px-5 py-20">
        <div className="absolute left-[-2%]">
          <p className="text-4xl lg:text-4xl font-bold">
            {work.title.toUpperCase()}
          </p>
        </div>
        <div className="bg-slate-200 p-2 flex justify-between mt-12 mb-3 rounded">
          <div className="w-[48%] h-[200px] overflow-hidden">
            <img src={`/images/${work.main}`} alt={work.title} className=""/>
          </div>
          <div className="w-[48%] h-[200px] overflow-hidden relative">
            <img src={`/images/${work.main}`} alt={work.title} className="absolute bottom-0"/>
          </div>
        </div>
        <div>
          <p className="text-4xl">
            {work.header .toUpperCase()}
          </p>
        </div>
        <div className="bg-slate-200 p-2 flex flex-col gap-2 items-center justify-between my-3 rounded">
          <div className="h-[200px] overflow-hidden">
            <img src={`/images/${work.main}`} alt={work.title} className=""/>
          </div>
          <div className="w-[80%] h-[160px] overflow-hidden">
            <img src={`/images/${work.main}`} alt={work.title} className=""/>
          </div>
          <div className="w-[32%] h-[200px] overflow-hidden relative">
            <img src={`/images/${work.secondary}`} alt={work.title} className="absolute"/>
          </div>
        </div>
        <div className="py-2">
          <p className="font-bold">
            PROJECT CONTRIBUTION
          </p>
            <p className="">
                {work.rol}
            </p>
        </div>
        <div className="py-2">
          <p className="font-bold">
            PROJECT OVERVIEW
          </p>
            <p className="">
                {work.description}
            </p>
        </div>
        <div className="bg-slate-200 p-2 flex justify-between my-2 rounded">
          <div className="w-[60%]">
            <img src={`/images/${work.main}`} alt={work.title} className=""/>
          </div>
          <div className="w-[35%]">
            <img src={`/images/${work.secondary}`} alt={work.title} className=""/>
          </div>
        </div>
        <div className="absolute right-0">
          <p className="font-bold">
            CLICK HERE
          </p>
          <p className="font-bold text-4xl">
            NEXT PROJECT
          </p>
        </div>
      </section>
    </Inner>
  );
}
