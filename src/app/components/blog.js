import RecetNews from "./recetNews";

export default function Blog() {
  const data = [
    {
      title: (
        <>
          <h2
            className={`text-[clamp(70px,9vw,96px)] xl:text-[clamp(70px,4.5vw,96px)] font-bold text-white mb-0 leading-[1] font-itcGBold`}
          >
            Blog
          </h2>
        </>
      ),
      text: (
        <>
          <p className="text-[26px] text-white leading-[1.8rem]">
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
    <section className="mt-24 w-full h-full relative">
      <div className="peg w-6 h-6 absolute -top-20" id="blog"></div>
      {/* Zona Orange */}
      <div className="h-full w-full bg-[url(/home/bg-yellow.png)] bg-cover bg-no-repeat">
        <div className="px-[clamp(1rem,5vw,6rem)]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full mx-auto h-full pt-4 pb-10">
            <div className="relative flex items-center h-full md:mt-4 mt-8">
              {/* Imagen a la izquierda */}
              <div className="absolute w-fit h-full -top-6">
                <img
                  src="/home/sheetWhite.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>
              {/* Texto encima de la imagen */}
              <div className="w-fit text-left ml-14 py-2">{data[0].title}</div>
            </div>
            <div className="flex flex-col justify-center h-fit lg:mt-4 ml-10 lg:ml-[min(15rem,15vw)] text-[clamp(2rem,4vw,2.5rem)]">
              {/* Text Content */}
              <div className="space-y-6">{data[0].text}</div>
              <div className="my-4 ">{data[0].text1}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Zona Card */}
      <RecetNews tipo="actualidad" />
    </section>
  );
}
