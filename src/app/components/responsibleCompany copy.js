"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ResponsibleCompany2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // La animación se activa cada vez que entra en vista
    threshold: 0.2, // Activa la animación cuando el 20% de la sección esté visible
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center space-y-8 p-10"
    >
      {/* Texto 1 - Entra desde la izquierda */}
      <motion.div
        className="text-left"
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0 }}
      >
        <h2 className="text-3xl font-bold text-green-800">
          Texto de la izquierda 1
        </h2>
      </motion.div>

      {/* Imagen - Entra desde la derecha con un delay de 0.5s */}
      <motion.div
        className="w-full md:w-1/3"
        initial={{ x: 200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.5,
        }}
      >
        <img
          src="https://via.placeholder.com/400"
          alt="Imagen"
          className="object-cover w-full h-auto"
        />
      </motion.div>

      {/* Texto 2 - Entra desde la izquierda con easing más suave */}
      <motion.div
        className="text-left"
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 1,
        }} // 🔥 Aquí aplicamos la nueva transición
      >
        <h2 className="text-3xl font-bold text-green-800">
          Texto de la izquierda 2
        </h2>
      </motion.div>

      {/* Texto 3 - Entra desde la izquierda con delay extra */}
      <motion.div
        className="text-left"
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 1.5,
        }} // 🔥 Ajustado también
      >
        <h2 className="text-3xl font-bold text-green-800">
          Texto de la izquierda 3
        </h2>
      </motion.div>
    </div>
  );
};

export default ResponsibleCompany2;
