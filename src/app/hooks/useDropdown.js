import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook para manejar la lógica de un menú desplegable
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.closeOnEscape - Si el menú debe cerrarse al presionar Escape
 * @param {boolean} options.closeOnOutsideClick - Si el menú debe cerrarse al hacer clic fuera
 * @returns {Object} - Estado y funciones del dropdown
 */
export const useDropdown = ({
    closeOnEscape = true,
    closeOnOutsideClick = true
} = {}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (closeOnOutsideClick &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                close();
            }
        };

        const handleEscapeKey = (event) => {
            if (closeOnEscape && event.key === 'Escape') {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, closeOnEscape, closeOnOutsideClick]);

    return {
        isOpen,
        setIsOpen,
        toggle,
        close,
        dropdownRef
    };
}; 