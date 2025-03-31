export default function WhatWeDo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-row ">
        <div className="relative flex items-center flex-1">
          {/* Imagen a la izquierda */}
          <div className="w-1/3">
            <img
              src="/home/quehacemos.png"
              alt="Descripción de la imagen"
              className="w-[70px] h-[90px]"
            />
          </div>

          {/* Texto encima de la imagen */}
          <div className="absolute left-8 top-[38px]  w-full text-left">
            <h2 className="text-[60px] font-bold text-[#E7681F] mb-12 leading-[0.8]">
              Qué
              <br /> hacemos
            </h2>
          </div>
        </div>

        <div className="flex-2 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#4A4A4A] leading-relaxed ">
              Productora Agrícola AG CI SAS, hace parte de la industria de
              procesamiento, comercialización y distribución de alimentos secos
              y congelados en el mercado colombiano e internacional. Con
              nuestros productos queremos difundir la tradición culinaria latino
              americana a través de alimentos con valor agregado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
