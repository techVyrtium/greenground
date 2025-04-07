"use client"
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MapW() {
  return (
    <section className="w-full h-full mt-20 ">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://my.spline.design/maplocation-6600ef9f5bb652f87ee9228830dc1be3/"
            className="flex items-center justify-center"
          />
        </Suspense>
    </section>
  )
}
