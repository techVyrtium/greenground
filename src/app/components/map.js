'use client'
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MapW() {
  const [screen, setScreen] = useState();
  useEffect(() => {
    if (window)
      setScreen(window.screenX);
  }, [])
  return (

    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-8">
      <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
        <>
          {screen >= 1024 ? (<Spline scene="https://prod.spline.design/WIoPFI60QecScwmI/scene.splinecode" />) : (<Image src={'/home/map.png'} width={444} height={665} className="my-20 w-full" />)}

        </>
      </Suspense>
    </section>
  );
}
