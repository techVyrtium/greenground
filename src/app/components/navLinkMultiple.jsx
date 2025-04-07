import Link from "next/link"
import PropTypes from 'prop-types';
import { Dropdown } from "./common/Dropdown";

/**
 * Opción del menú de navegación con submenú desplegable
 */
export const NavLinkMultiple = ({ title, options = [] }) => {
    return (
        <Dropdown
            title={title}
            className="relative"
            menuClassName="absolute top-8 bg-[#1B925A] rounded p-4 w-max font-light"
        >
            <ol>
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