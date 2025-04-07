import Link from "next/link"
import PropTypes from 'prop-types';
import { Dropdown } from "./common/Dropdown";

/**
 * Opción del menú lateral con submenú desplegable
 */
export const SidebarLinksMultiples = ({ title, options = [] }) => {
    return (
        <Dropdown
            title={title}
            className="relative flex flex-col items-center gap-2 w-full"
            buttonClassName="w-full justify-center"
            menuClassName="bg-[#008638] rounded p-4 pl-8 font-light w-4/5 items-center"
        >
            <ol>
                {options.map(({ id, text, href }) => (
                    <li key={id} className="mb-1">
                        <Link 
                            href={href}
                            className="hover:underline hover:font-bold cursor-pointer block w-full"
                        >
                            {text}
                        </Link>
                    </li>
                ))}
            </ol>
        </Dropdown>
    );
};

SidebarLinksMultiples.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};