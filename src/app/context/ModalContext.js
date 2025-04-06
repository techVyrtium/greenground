"use client";
import { createContext, useContext, useState } from "react";
import ContactForm from "@/app/components/modal/ContactForm";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModalContact, setShowModalContact] = useState(false);

  const toggleModalContact = () => {
    setShowModalContact((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ showModalContact, toggleModalContact }}>
      {children}
      {showModalContact && <ContactForm toggleModalContact={toggleModalContact} />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
} 