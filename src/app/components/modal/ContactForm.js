"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FormContact from "../ContactForm";

const ContactForm = ({ toggleModalContact }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 backdrop-brightness-50  flex justify-center items-center z-50 ">
      <FormContact toggleModalContact={toggleModalContact} contact={true} />
    </div>
  );
};

export default ContactForm;
