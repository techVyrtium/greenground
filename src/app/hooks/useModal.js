"use client";
import { useState, useCallback } from 'react';

let modalState = false;
let listeners = new Set();

export function useModal() {
  const [, setState] = useState(modalState);

  const toggleModal = useCallback(() => {
    modalState = !modalState;
    listeners.forEach(listener => listener(modalState));
  }, []);

  useState(() => {
    const listener = (state) => setState(state);
    listeners.add(listener);
    return () => listeners.delete(listener);
  });

  return {
    isOpen: modalState,
    toggleModal
  };
} 