"use client";
import { useEffect } from "react";
import FormContact from "@/app/components/ContactForm";

const ContactForm = ({ toggleModalContact }) => {

  const handleClose = () => {
    setTimeout(() => {
      toggleModalContact();
    }, 350);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [toggleModalContact]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };


  return (
    <div 
      className="fixed inset-0 backdrop-brightness-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <FormContact toggleModalContact={toggleModalContact} contact={true} />
    </div>
  );
};

export default ContactForm;
