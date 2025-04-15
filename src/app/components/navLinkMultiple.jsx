import Link from "next/link"
import PropTypes from 'prop-types';
import { Dropdown } from "./common/Dropdown";

/**
 * Opción del menú de navegación con submenú desplegable
 */
export const NavLinkMultiple = ({ title, options = [], className = '', onToogle }) => {
    return (
        <Dropdown
            title={title}
            className={className}
            onToggle={onToogle}
            menuClassName="absolute top-8 rounded w-[300px] font-light bg-[#00000040] backdrop-blur-[50px] z-30"
        >
            <ol className="m-4 z-30">
                {options.map(({ id, text, href }) => (
                    <li key={id} className="mb-1">
                        <Link
                            href={href}
                            className="hover:underline hover:font-bold cursor-pointer"
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ol>
        </Dropdown>
    );
};

NavLinkMultiple.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};