"use client"
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MapW() {
  return (
    <section className="w-full h-full mt-20 ">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
          //scene="cxo_face.spline"
            scene="https://prod.spline.design/LJYzeFf9FCVxgkFW/scene.splinecode"
            className="flex items-center justify-center"
          />
        </Suspense>
    </section>
  )
}
