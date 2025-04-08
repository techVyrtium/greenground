"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { itcAvantGardeCEGothicLTBold } from "../styles/fonts";
export default function ResponsibleCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const [animationKey, setAnimationKey] = useState(0);

  // Reiniciar animación cada 5 segundos
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationKey((prev) => prev + 1);
  //   }, 8000); // Ajusta el tiempo según necesidad

  //   return () => clearInterval(interval);
  // }, []);

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
      className={`${itcAvantGardeCEGothicLTBold.className} relative w-full px-4 sm:px-6 lg:px-8 bg-[#F3AA17] h-[clamp(400px,_45vw,_750px)] flex items-center justify-center overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key={animationKey}
            className="w-full lg:max-w-7xl h-full relative z-10 flex flex-col items-start justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Texto normal encima del fondo */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0,
              }}
              className="z-10"
              style={{ fontSize: "clamp(22px, 5vw, 48px)" }}
            >
              <p className=" text-[#008E4A] font-[700] leading-tight mb-0">
                Somos una empresa
              </p>
              <p className=" text-[#008E4A] font-[700] leading-tight mt-[-4px]">
                Socialmente Responsable
              </p>
            </motion.div>

            {/* Textos flotando sobre la imagen */}
            <motion.div
              variants={animationSettings.text}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.5,
              }}
              className="z-10 mt-4"
              style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
            >
              <p className="text-white font-[700] leading-tight">
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
              className="z-10"
              style={{ fontSize: "clamp(38px, 5vw, 96px)" }}
            >
              <p className="text-white font-[700] leading-tight">
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
              className="z-10"
              style={{ fontSize: "clamp(26px, 5vw, 54px)" }}
            >
              <p className="text-[#B52C17] font-[700] leading-tight">
                Y comercio justo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagen como fondo animada */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full lg:max-w-7xl absolute top-16 left-0 right-2 bottom-0 mx-auto  h-[80%] bg-no-repeat bg-contain bg-right bg-[url('/home/responsable.png')] z-0"
      />
    </section>
  );
}
