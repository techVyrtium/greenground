"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { itcAvantGardeCEGothicLTBold } from "../styles/fonts";
import { useTranslations } from "next-intl";

export default function ResponsibleCompany() {
  const ref = useRef(null);
  const [animationKey,] = useState(0);
  // const t = useTranslations('responsableCompany');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      y: 50,
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
      hidden: { opacity: 1, x: -2550 },
      visible: { opacity: 1, x: 0, y: 50, },
      exit: { opacity: 1, x: -100 },
    },
    image: {
      hidden: { opacity: 1, x: 1810 },
      visible: { opacity: 1, x: 0, y: 50 },
      exit: { opacity: 0, x: 100 },
    },
  };

  return (
    <section
      ref={ref}
      className={`${itcAvantGardeCEGothicLTBold.className} relative w-full bg-[#F3AA17] h-[clamp(400px,_45vw,_700px)] flex items-center justify-center overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          className="mt-4 w-full md:max-w-7xl px-[clamp(1rem,4vw,3rem)] md:px-10 h-full relative z-10 flex flex-col items-start justify-start"
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.8, once: true }}
          // animate="visible"
          exit="exit"
        >
          {/* Texto normal encima del fondo */}
          <motion.div
            variants={animationSettings.text}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0,
            }}
            className="z-10"
            style={{ fontSize: "clamp(20px, 3vw, 48px)" }}
          >
            <p className=" text-[#008E4A] font-[700] leading-tight mb-0">
              Somos una empresa
              {/* {t('text1')} */}
            </p>
            <p className=" text-[#008E4A] font-[700] leading-tight md:mt-[-4px]">
              Socialmente Responsable
              {/* {t('text2')} */}
            </p>
          </motion.div>

          {/* Textos flotando sobre la imagen */}
          <motion.div
            variants={animationSettings.text}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.5,
            }}
            className="z-10 mt-2"
            style={{ fontSize: "clamp(26px, 4.5vw, 64px)" }}
          >
            <p className="text-white font-[700] leading-tight">
              Amigable con el
              {/* {t('text3')} */}
            </p>
          </motion.div>

          <motion.div
            variants={animationSettings.text}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 1.0,
            }}
            className="z-10 lg:-mt-6"
            style={{ fontSize: "clamp(33px, 8vw, 128px)" }}
          >
            <p className="text-white font-[700] leading-tight">
              Medio Ambiente
              {/* {t('text4')} */}
            </p>
          </motion.div>

          <motion.div
            variants={animationSettings.text}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 1.5,
            }}
            className="z-10 lg:-mt-4"
            style={{ fontSize: "clamp(26px, 4.5vw, 64px)" }}
          >
            <p className="text-[#B52C17] font-[700] leading-tight">
              Y comercio justo
              {/* {t('text5')} */}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Imagen como fondo animada */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full lg:max-w-7xl absolute top-10 xl:left-8 right-20 bottom-0 mx-auto  h-[90%] bg-no-repeat bg-contain bg-right bg-[url('/home/responsable.png')] z-0"
      />
    </section>
  );
}
