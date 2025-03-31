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
            key={animationKey} // Clave para forzar la reanimación
            className="max-w-7xl py-30 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Primer texto */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0,
              }}
              className="absolute top-[110px] left-0 z-10 pl-[300px] mx-auto text-left"
            >
              <p className="text-[38px] text-[#008E4A] font-[700] leading-tight mb-0">
                Somos una empresa
              </p>
              <p className="text-[38px] text-[#008E4A] font-[700] leading-tight mt-[-4px]">
                Socialmente Responsable
              </p>
            </motion.div>

            {/* Imagen */}
            <motion.div
              variants={animationSettings.image}
              className="absolute top-12 right-30 z-0"
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.5, // Aparece después del primer texto
              }}
            >
              <img
                src="/home/responsable.png"
                alt="Production process"
                className="w-[530px]"
              />
            </motion.div>

            {/* Segundo texto */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.5, // Aparece después de la imagen
              }}
              className="absolute top-[190px] left-0 z-10 pl-[300px] mx-auto text-left"
            >
              <p className="text-[58px] text-[#fff] font-[700] leading-tight">
                Amigable con el
              </p>
            </motion.div>

            {/* Tercer texto */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 1.0, // Aparece después del segundo texto
              }}
              className="absolute top-[250px] left-0 z-10 pl-[300px] mx-auto text-left"
            >
              <p className="text-[100px] text-[#fff] font-[700] leading-tight mt-[-10px]">
                Medio Ambiente
              </p>
            </motion.div>

            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 1.5, // Aparece después de la imagen
              }}
              className="absolute top-[355px] left-0 pl-[300px] mx-auto text-left"
            >
              <p className="text-[54px] text-[#B52C17] font-[700] leading-tight mt-[-10px]">
                Y comercio justo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
