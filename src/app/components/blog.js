import RecetNews from "./recetNews";

export default function Blog() {

  const data = [
    {
      title: (
        <>
          <h2
            className={`text-[60px] font-bold text-white mb-12 leading-[0.8] font-itcGBold`}
          >
            Blog
          </h2>
        </>
      ),
      text: (
        <>
          <p className="text-[26px] text-white leading-relaxed">
            Descubre{" "}
            <span className=" font-bold">recetas fáciles y deliciosas </span>,
            las{" "}
            <span className=" font-bold">
              últimas tendencias en alimentación{" "}
            </span>
            saludable y nuestro{" "}
            <span className=" font-bold">
              compromiso con la sostenibilidad.
            </span>
          </p>
        </>
      ),
      text1: (
        <>
          <p
            className={`text-[26px] text-white leading-relaxed font-bold font-itcGBold`}
          >
            Inspírate, cocina y disfruta con nosotros.
          </p>
        </>
      ),
    },
  ];

  

  return (
    <section className="mt-24 w-full h-full" id="blog">
      {/* Zona Orange */}
      <div className="h-full w-full bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto h-full ">
            <div className="relative flex h-full w-1/3 py-8 ">
              {/* Imagen a la izquierda */}
              <div className="lg:w-1/3 w-full h-full">
                <img
                  src="/home/sheetWhite.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-16 top-[80px] w-full text-left font-itcGBold">
                {data[0].title}
              </div>
            </div>
            <div className="flex flex-col justify-center h-fit lg:ml-10 lg:mt-4">
              {/* Text Content */}
              <div className="space-y-6">{data[0].text}</div>
              <div className="mt-6">{data[0].text1}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Zona Card */}
     <RecetNews />
    </section>
  );
}
