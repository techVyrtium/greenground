'use client'
import React, { Suspense, useEffect, useState } from "react";
import { MapMobile } from "./MapMobile";
import MapW2 from "./MapW2";

export default function MapW() {
  const [screen, setScreen] = useState();
  useEffect(() => {
    if (window)
      setScreen(window.innerWidth);
  }, [])
  return (

    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-20">
      <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
        <>
          {screen >= 1024 ? (<div className="bg-white w-full"><MapW2 /></div>) : (<MapMobile />)}
          {/* <div className="bg-cover bg-no-repeat bg-white w-full"><MapW2 /></div> */}
        </>
      </Suspense>
    </section>
  );
}
