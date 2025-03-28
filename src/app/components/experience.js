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
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const animationSettings = {
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
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7681F] h-[500px] relative overflow-hidden flex items-center justify-center"
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
              className="w-full flex items-center justify-center space-x-12 z-10"
              variants={{
                visible: { transition: { staggerChildren: 0.5 } },
              }}
            >
              <motion.p
                variants={animationSettings.text}
                transition={{ duration: 0.7 }}
                className="text-[50px] sm:text-[100px] text-[#fff] font-[700] leading-tight whitespace-nowrap"
              >
                Más de
              </motion.p>

              {/* Número "30" con imagen */}
              <motion.div
                variants={animationSettings.numberBackground}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="px-20 relative w-[250px] h-[150px] sm:w-[200px] sm:h-[200px] flex items-center justify-center"
              >
                <motion.p
                  animate={{
                    color: color, // Cambiar color según el estado
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[70px] sm:text-[220px] font-[700] leading-tight whitespace-nowrap absolute z-10"
                >
                  30
                </motion.p>
                <motion.div
                  variants={animationSettings.numberBackground}
                  transition={{ duration: 0.7, delay: 2.5 }}
                  className="absolute flex items-center justify-center bg-contain bg-center w-[350px] h-[350px] bg-no-repeat mb-14 ml-4 overflow-visible"
                  style={{ backgroundImage: `url('/home/manzana.png')` }}
                >
                  <div ref={manzanaRef} className="absolute inset-0" />
                </motion.div>
              </motion.div>

              <motion.p
                variants={animationSettings.text}
                transition={{ duration: 0.7, delay: 1 }}
                className="text-[50px] sm:text-[100px] text-[#fff] font-[700] leading-tight whitespace-nowrap"
              >
                años
              </motion.p>
            </motion.div>

            {/* Imagen adicional */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
              <motion.img
                src="/home/experiencepera.png"
                alt="Production process"
                className="w-[400px] h-auto"
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
