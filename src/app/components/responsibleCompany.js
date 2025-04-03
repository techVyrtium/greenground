"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ResponsibleCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const [animationKey, setAnimationKey] = useState(0);

  // Reiniciar animación cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 8000); // Ajusta el tiempo según necesidad

    return () => clearInterval(interval);
  }, []);

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
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
    image: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full px-4 sm:px-6 lg:px-8 bg-[#F3AA17] h-[650px]"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key={animationKey}
            className="relative w-full lg:max-w-7xl py-30 flex flex-col items-center lg:items-start min-h-[600px] lg:min-h-[700px] overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Imagen */}
            <motion.div
              variants={animationSettings.image}
              className="absolute sm:right-0 md:right-30  z-0 flex justify-center max-w-full"
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.5,
              }}
            >
              <img
                src="/home/responsable.png"
                alt="Production process"
                className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] max-w-full"
              />
            </motion.div>

            {/* Textos encima de la imagen */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0,
              }}
              className="absolute top-[30%] sm:top-[25%] md:top-[20%] lg:top-[110px] left-0 lg:left-[300px] z-10 w-full flex lg:justify-start"
            >
              <div className="text-left lg:text-left">
                <p className="text-[20px] md:text-[28px] sm:text-[34px] md:text-[38px] text-[#008E4A] font-[700] leading-tight mb-0">
                  Somos una empresa
                </p>
                <p className="text-[20px] md:text-[28px] sm:text-[34px] md:text-[38px] text-[#008E4A] font-[700] leading-tight mt-[-4px]">
                  Socialmente Responsable
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.5,
              }}
              className="absolute top-[38%] sm:top-[42%] md:top-[38%] lg:top-[190px] left-0 lg:left-[300px] z-10 w-full flex justify-start"
            >
              <p className="text-[26px] md:text-[38px] sm:text-[48px] md:text-[58px] text-[#fff] font-[700] leading-tight">
                Amigable con el
              </p>
            </motion.div>

            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 1.0,
              }}
              className="absolute top-[42.5%] sm:top-[50%] md:top-[46%] lg:top-[250px] left-0 lg:left-[300px] z-10 w-full flex justify-start"
            >
              <p className="text-[40px] md:text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] text-[#fff] font-[700] leading-tight">
                Medio Ambiente
              </p>
            </motion.div>

            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 1.5,
              }}
              className="absolute top-[52%] sm:top-[62%] md:top-[58%] lg:top-[355px] left-0 lg:left-[300px] z-10 w-full flex justify-start"
            >
              <p className="text-[26px] md:text-[34px] sm:text-[44px] md:text-[48px] lg:text-[54px] text-[#B52C17] font-[700] leading-tight">
                Y comercio justo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
