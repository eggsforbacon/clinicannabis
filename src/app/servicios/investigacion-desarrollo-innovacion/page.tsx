import React from "react";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {strings} from "@/model/strings";
import Navbar from "@/components/ui/Navbar";
import {Metadata} from "next";


const InvestigaciónDesarrolloInnovacion = () => {
  const s = strings.services["investigacion-desarrollo-innovacion"];

  return (
      <main>
          <Navbar selection={""}/>
          <article
              className={"relative flex flex-col items-center md:items-end justify-center gap-8 px-6 md:px-16 lg:px-32 xl:px-44 2xl:px-64 h-screen"}>
              <div className={"absolute h-full w-full top-0 right-0 overflow-clip"}>
                  <Image src={"/services/investigación-desarrollo-innovacion/smile-lp.jpg"}
                          alt={"Some cannabis leaves on a white background with some seeds and alternative medicine"}
                          quality={100}
                          width={1920} height={1316}
                          className={"opacity-50 md:opacity-100 absolute top-72 md:top-36 lg:top-20 xl:top-20 2xl:top-10 -left-80 md:-left-96 lg:left-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.23] xl:scale-[1.15] 2xl:scale-100"}/>
              </div>
              <section
                    className={"relative lg:w-112 2xl:w-136 flex flex-col items-center lg:items-start justify-start gap-2 text-center lg:text-start md:text-xl 2xl:text-2xl font-normal text-viridian-green"}>
                    <h2 className={"mt-8 lg:w-168 2xl:w-208 font-black italic text-3xl md:text-5xl 2xl:text-6xl"}>{s.title}</h2>
                    <p>{s.paragraph1}</p>
                </section>
          </article>
          <Footer/>
      </main>
  );
}

export default InvestigaciónDesarrolloInnovacion;