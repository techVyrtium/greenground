"use client";
import {
  motion,
  useInView,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const manzanaRef = useRef(null);

  const isSectionInView = useInView(sectionRef, {
    once: false,
    margin: "-50px",
  });

  const [animationKey, setAnimationKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const controls = useAnimation();

  // Reiniciar la animación cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1); // Reiniciar la animación
    }, 8000); // Cada 8 segundos cambiar la animación

    return () => clearInterval(interval);
  }, []);

  // Control de color de "30"
  const [color, setColor] = useState("#fff");

  // Función para controlar el color de "30"
  useEffect(() => {
    if (isAnimating) {
      setColor("#fff"); // Restablecer a blanco al comenzar
      const timeout = setTimeout(() => {
        setColor("#B52C17"); // Cambiar a rojo después de 3 segundos
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
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
        transition: { duration: 0.7, ease: "easeInOut", delay: 0 },
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3, ease: "easeOut" },
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
      className="w-full bg-[#E7681F] h-[650px] relative overflow-hidden flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {isSectionInView && (
          <motion.div
            key={animationKey}
            className="w-full h-full relative flex flex-col items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationStart={() => setIsAnimating(true)} // Iniciar animación
            onAnimationComplete={() => setIsAnimating(false)} // Finalizar animación
          >
            {/* Contenedor del texto */}
            <motion.div
              className="w-full flex items-center justify-center  z-10"
              variants={{
                visible: { transition: { staggerChildren: 0.5 } },
              }}
            >
              <div className="flex flex-col text-center leading-none">
                <div className="flex justify-center items-baseline gap-6 space-x-10">
                  <motion.p
                    variants={animationSettings.text1}
                    transition={{ duration: 0.7 }}
                    className="text-[50px] sm:text-[100px] text-[#fff] font-[700] leading-tight whitespace-nowrap"
                  >
                    Más de
                  </motion.p>

                  {/* Número "30" con imagen */}
                  <motion.div
                    variants={animationSettings.numberBackground}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="px-20 relative w-[250px] h-[150px] sm:w-[200px] sm:h-[200px] flex items-baseline justify-center"
                  >
                    <motion.p
                      animate={{
                        color: color, // Cambiar color según el estado
                      }}
                      transition={{ duration: 0.8 }}
                      className="text-[70px] sm:text-[220px] font-[700] leading-tight whitespace-nowrap absolute z-10 mt-8"
                    >
                      30
                    </motion.p>
                    <motion.div
                      variants={animationSettings.numberImage}
                      transition={{ duration: 0.7, delay: 2.5 }}
                      className="absolute flex items-center justify-center bg-contain bg-center w-[350px] h-[350px] bg-no-repeat ml-4 -mt-8 overflow-visible"
                      style={{ backgroundImage: `url('/home/manzana.png')` }}
                    >
                      <div ref={manzanaRef} className="absolute inset-0" />
                    </motion.div>
                  </motion.div>
                  <div className="max-w-[280px] flex flex-col items-start">
                    <motion.p
                      variants={animationSettings.text3}
                      transition={{ duration: 0.7, delay: 1 }}
                      className="text-[50px] sm:text-[100px] text-[#fff] font-[700] leading-tight whitespace-nowrap text-left"
                    >
                      años
                    </motion.p>
                    <motion.p
                      variants={animationSettings.text4}
                      transition={{ duration: 0.7, delay: 2.4 }}
                      className="text-[16px] sm:text-[24px] text-[#B52C17] leading-none self-start  font-[800] text-left"
                    >
                      de experiencia como productores y comercializadores de
                      congelados y abarrotes
                    </motion.p>
                  </div>
                  <motion.div
                    variants={animationSettings.imageEnd}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="flex items-baseline justify-start bg-contain bg-baseline w-[200px] h-[200px] bg-no-repeat mb-14 -ml-10 overflow-visible"
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
                src="/home/experiencepera.png"
                alt="Production process"
                className="w-[480px] h-auto"
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
        )}
      </AnimatePresence>
    </section>
  );
}
