'use client'
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { MapMobile } from "./MapMobile";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MapW() {
  const [screen, setScreen] = useState();
  useEffect(() => {

    if (window) {
      console.log("Ingresa y... ", window.screen.availWidth);
      setScreen(window.screen.availWidth);
    }
  }, [])
  return (

    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-8">
      <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
        <>
          {screen >= 1024 ? (<Spline scene="https://prod.spline.design/WIoPFI60QecScwmI/scene.splinecode" />) : (<MapMobile />)}

        </>
      </Suspense>
    </section>
  );
}
