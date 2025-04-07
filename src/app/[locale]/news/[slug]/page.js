"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Data from "../data";
import RecetNews from "@/app/components/recetNews";

export default function News() {
  const params = useParams();
 // console.log(params.slug)
  const d = useTranslations("detallenews");
  const t = useTranslations("news")
  const { news } = Data();
  const [dato, setDato] = useState("")
  const [tipo, setTipo] =useState("")
 
  useEffect(() => {
    const info = news.filter((dat) => dat.id == params.slug)
    console.log("page ", info[0].tipo)
    if(info) {
      setDato(info)
      if(info[0].tipo == 'novedades') { setTipo('novedades');  } 
      else { setTipo('recetas'); } 
    } 
  },[])

  return (
    <section className="px-4 sm:px-6 lg:px-50 w-full h-fit mt-20 font-itcGBook">
      <div className="max-w-7xl mx-auto flex flex-col">
        {dato.length > 0 ? <>{dato[0].section}</> : ""}
        <div className="mt-10 text-[30px] md:text-[36px] xl:text-[48px] 2xl:text-[60px] text-[#008638] font-itcGBold ">
          {d("Title")} 
        </div>

        <div className="mt-4 max-w-7xl mx-auto flex w-full items-center justify-center">
          <RecetNews tipo={tipo}/>
        </div>
      </div>
    </section>
  );
}
