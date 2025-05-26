"use client";
import React, { Suspense, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

// 1. Componente de Fallback para errores
function ErrorFallback({ error, resetErrorBoundary }) {
  const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.userAgent);

  return (
    <div className="text-red-400 p-4 text-center">
      <h3 className="text-xl mb-2">⚠️ Error al cargar el mapa 3D</h3>
      {isMac && (
        <p className="mb-2">
          Recomendado: Usa Safari o Chrome actualizado en macOS
        </p>
      )}
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Intentar nuevamente
      </button>
    </div>
  );
}

// 2. Verificación WebGL
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

export default function MapW() {
  const [isValidScene, setIsValidScene] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // 3. Pre-validar la escena Spline
  useEffect(() => {
    const verifyScene = async () => {
      try {
        const response = await fetch(
          "https://prod.spline.design/WIoPFI60QecScwmI/scene.splinecode"
        );

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));
        console.log(
          "Tamaño del archivo:",
          (await response.blob()).size + " bytes"
        );

        if (!response.ok) throw new Error("Scene not found");

        setIsValidScene(true);
      } catch (error) {
        console.error("Error en verificación:", error);
        setIsValidScene(false);
      }
    };

    setWebGLSupported(checkWebGLSupport());
    verifyScene();
  }, []);

  if (!webGLSupported) {
    return (
      <div className="text-yellow-500 p-4 text-center">
        Tu navegador no soporta gráficos 3D. Actualiza o usa Chrome/Firefox.
      </div>
    );
  }

  return (
    <section className="w-full h-auto md:min-h-[400px] flex items-center justify-center my-8">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div className="text-white">Cargando mapa...</div>}>
          {isValidScene && (
            <Spline
              scene="https://prod.spline.design/WIoPFI60QecScwmI/scene.splinecode"
              onLoad={(spline) => {
                console.log("Spline cargado:", spline);
                spline.setZoom(0.5); // Ejemplo de ajuste
              }}
              onError={(error) => {
                console.error("Spline runtime error:", error);
                throw new Error("Spline initialization failed");
              }}
              
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}