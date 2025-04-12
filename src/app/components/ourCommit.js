export default function OurCommit() {
  const data = [
    {
      title: (
        <>
          <h2
            className={`text-[clamp(40px,6vw,96px)] xl:text-[clamp(70px,4.5vw,96px)] font-bold text-white mb-12 leading-[0.8] w-fit font-itcGBold`}
          >
            Nuestro compromiso
          </h2>
        </>
      ),
      text: "Participamos como una de las empresas donantes y voluntarias hacia la comunidad de la Esperanza en la Guajira Colombiana, donde a través de donativos se instauró un tanque de agua que va a mejorar la calidad de vida de 100 familias, con un sistema de agua con capacidad de 10.000 litros que provisiona las necesidades hídricas de esta población.",
    },
  ];
  return (
    <section
      className="block mt-24 w-full xl:h-auto h-screen min-h-[400px]"
      id="ourCommit"
    >
      {/* Zona Orange */}
      <div className="relative h-[14rem] bg-[url(/home/bg-green.png)] bg-cover bg-no-repeat">
        <div className="px-[clamp(1rem,5vw,6rem)]">
          <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] w-full mx-auto h-full">
            {/* Columna izquierda (Imagen y texto) */}
            <div className="relative flex h-full xl:h-auto py-4 ">
              <div className="xl:w-1/3 h-full">
                <img
                  src="/home/sheetWhite.png"
                  alt="Descripción de la imagen"
                  className="w-[100px] h-[120px]"
                />
              </div>

              {/* Texto encima de la imagen */}
              <div className="absolute left-12 xl:left-16 top-[65px] xl:top-[50px] w-fit text-left font-itcGBold">
                {data[0].title}
              </div>
            </div>

            {/* Columna derecha (Video) */}
            <div className=" h-auto xl:w-full xl:h-auto hidden flex-col xl:flex justify-center items-center xl:pt-12 xl:pt-0 mt-8 xl:mt-10 -mt-28">
              <video
                src="/home/ourCommit.mov"
                autoPlay={true}
                loop
                muted={true}
                className="w-full h-auto max-h-[50vh] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Espacio para el texto debajo */}
      <div className="px-[clamp(1rem,5vw,6rem)] flex flex-col xl:flex-row xl:mt-[50px] mb-12 flex">
        <video
          src="/home/ourCommit.mov"
          autoPlay={true}
          loop
          muted={true}
          className="w-full h-auto max-h-[50vh] rounded-lg -mt-[50px] z-10 xl:hidden"
        />
        <div className="w-full xl:w-2/5 flex xl:order-none order-last">
          <div className="w-full">
            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.2] text-left mt-[60px] xl:mt-0">
              {data[0].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
