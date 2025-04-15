import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MapW() {
  return (
    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-8">
      <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
        <Spline scene="https://prod.spline.design/WIoPFI60QecScwmI/scene.splinecode" />
      </Suspense>
    </section>
  );
}
