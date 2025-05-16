'use client'
import React, { Suspense } from "react";
// import { MapMobile } from "./MapMobile";
import MapW2 from "./MapW2";

export default function MapW() {
  return (

    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-20">
      <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
        <>
          <div className="bg-cover bg-no-repeat bg-white w-full"><MapW2 /></div>
        </>
      </Suspense>
    </section>
  );
}
