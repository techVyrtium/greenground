"use client";
import {
  motion,
  // useInView,
  AnimatePresence,
  // useAnimation,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";
import experienciaPera from '@/assets/home/experiencepera.png';
export default function Experience() {
  const sectionRef = useRef(null);
  const manzanaRef = useRef(null);
  const t = useTranslations('experience')
  // const isSectionInView = useInView(sectionRef, {
  //   once: false,
  //   margin: "-50px",
  // });

  const [animationKey, setAnimationKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reiniciar la animación cada 8 segundos
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationKey((prev) => prev + 1);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  // Control de color de "30"
  const [color, setColor] = useState("#fff");

  // Función para controlar el color de "30"
  useEffect(() => {
    setColor("#fff"); // Restablecer a blanco al comenzar
    const timeout = setTimeout(() => {
      setColor("#B52C17"); // Cambiar a rojo después de 3 segundos
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      y: 50,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // Mantiene el stagger en la entrada
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5, // Todos desaparecen al mismo tiempo
      },
    },
  };

  const animationSettings = {
    text1: {
      hidden: { opacity: 0, x: -650 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -650 },
    },
    text2: {
      hidden: { opacity: 0, y: 250 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0.5, y: 250 },
    },
    text3: {
      hidden: { opacity: 0, x: 650 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 650 },
    },
    text4: {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 0 },
    },
    text: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    },
    image: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0 },
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
    numberBackground: {
      hidden: { opacity: 0, y: 250 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 250 },
    },
    numberImage: {
      hidden: { opacity: 0, scale: 0.2 },
      visible: { opacity: 1, scale: 1.1 },
      exit: { opacity: 0, y: 250 },
    },
    imageEnd: {
      hidden: { opacity: 0, y: -250 },
      visible: { opacity: 1, y: 20 },
      exit: { opacity: 0, y: -250 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7681F] h-[clamp(400px,45vw,750px)] relative overflow-hidden flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          className="w-full h-full relative flex flex-col items-center justify-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
          exit="exit"
          onAnimationStart={() => setIsAnimating(true)} // Iniciar animación
          onAnimationComplete={() => setIsAnimating(false)} // Finalizar animación
        >
          {/* Contenedor del texto */}
          <motion.div
            className="w-full flex items-center justify-center  z-10 font-baloo "
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
            }}
          >
            <div className="flex flex-col text-center leading-none">
              <div className="flex justify-center items-baseline gap-2 space-x-10 sm:space-x-10">
                <motion.p
                  variants={animationSettings.text1}
                  transition={{ duration: 0.7 }}
                  style={{ fontSize: "clamp(2rem, 10vw, 8rem)" }}
                  className="pl-8 text-[#fff] font-[700] leading-tight whitespace-nowrap"
                >
                  {t('text1')}
                </motion.p>

                {/* Número "30" con imagen */}
                <motion.div
                  variants={animationSettings.numberBackground}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="px-6 sm:px-20 relative w-[40px] h-[40px] sm:w-[200px] sm:h-[200px] flex items-baseline justify-center"
                >
                  <motion.p
                    animate={{
                      color: color, // Cambiar color según el estado
                    }}
                    style={{ fontSize: "clamp(90px, 19vw, 245px)" }}
                    transition={{ duration: 0.8 }}
                    className=" font-[700] leading-tight whitespace-nowrap absolute z-10 -mt-12 sm:mt-12 md:mt-8 lg:mt-2"
                  >
                    {t('number')}
                  </motion.p>
                  <motion.div
                    variants={animationSettings.numberImage}
                    transition={{ duration: 0.7, delay: 2.5 }}
                    className="absolute flex items-center justify-center bg-contain bg-center w-[145px] h-[145px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px]  bg-no-repeat md:ml-4 -mt-16 sm:mt-2 md:-mt-8 overflow-visible"
                    style={{ backgroundImage: `url('/home/manzana.png')` }}
                  >
                    <div ref={manzanaRef} className="absolute inset-0" />
                  </motion.div>
                </motion.div>
                <div className="max-w-[120px] sm:max-w-[200px] md:max-w-[280px] flex flex-col items-start">
                  <motion.p
                    variants={animationSettings.text3}
                    transition={{ duration: 0.7, delay: 1 }}
                    style={{ fontSize: "clamp(2rem, 10vw, 8rem)" }}
                    className="text-[#fff] font-[700] leading-tight whitespace-nowrap text-left"
                  >
                    {t('text2')}
                  </motion.p>
                  <motion.p
                    variants={animationSettings.text4}
                    transition={{ duration: 0.7, delay: 2.4 }}
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.4rem)" }}
                    className="text-[14px] md:text-[18px] lg:text-[24px] text-[#B52C17] leading-none self-start  font-[800] text-left whitespace-wrap "
                  >
                    {t('text3')}
                  </motion.p>
                </div>
                <motion.div
                  variants={animationSettings.imageEnd}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="hidden lg:flex  items-baseline justify-start bg-contain bg-baseline w-[200px] h-[200px] bg-no-repeat mb-14 -ml-10 overflow-visible"
                  style={{
                    backgroundImage: `url('/home/experienceultima.png')`,
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Imagen adicional */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
            <motion.img
              src={experienciaPera}
              alt="Production process"
              className="w-[250px] sm:w-[400px] lg:w-[480px] h-auto"
              variants={animationSettings.image}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0,
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
