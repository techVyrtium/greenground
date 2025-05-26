"use client";
import { useModal } from "@/hooks/useModal";
import ContactForm from "@/components/modal/ContactForm";

export default function ModalContainer() {
  const { isOpen } = useModal();
  
  if (!isOpen) return null;
  
  return <ContactForm />;
} 