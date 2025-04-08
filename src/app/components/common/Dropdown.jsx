import PropTypes from 'prop-types';
import { useDropdown } from '@/app/hooks/useDropdown';
import { FaChevronDown } from 'react-icons/fa';

/**
 * Componente base para menús desplegables
 */
export const Dropdown = ({
    title,
    children,
    className = '',
    buttonClassName = '',
    menuClassName = '',
    icon: Icon = FaChevronDown,
    closeOnSelect = true,
    onToggle,
}) => {
    const { isOpen, toggle, close, dropdownRef } = useDropdown();

    const handleToggle = () => {
        toggle();
        if (onToggle) onToggle();
    };

    const handleSelect = () => {
        if (closeOnSelect) {
            close();
        }
    };

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={handleToggle}
                className={`flex items-center gap-1 hover:underline hover:font-bold cursor-pointer ${buttonClassName}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {title}
                <Icon className="w-4 h-4" fillOpacity={0.85} />
            </button>

            {isOpen && (
                <div 
                    className={`z-10 ${menuClassName}`}
                    role="menu"
                    aria-orientation="vertical"
                    onClick={handleSelect}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    menuClassName: PropTypes.string,
    icon: PropTypes.elementType,
    closeOnSelect: PropTypes.bool,
    onToggle: PropTypes.func,
}; 