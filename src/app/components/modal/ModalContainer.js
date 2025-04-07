"use client";
import { useModal } from "@/app/hooks/useModal";
import ContactForm from "@/app/components/modal/ContactForm";

export default function ModalContainer() {
  const { isOpen } = useModal();
  
  if (!isOpen) return null;
  
  return <ContactForm />;
} 