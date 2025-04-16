import Link from "next/link"
import PropTypes from 'prop-types';
import { Dropdown } from "./common/Dropdown";

/**
 * Opción del menú lateral con submenú desplegable
 */
export const SidebarLinksMultiples = ({ title, options = [], buttonClassName = '' }) => {
    return (
        <Dropdown
            title={title}
            className="flex flex-col items-end gap-2 w-full"
            buttonClassName={`w-full justify-end ${buttonClassName}`}
            menuClassName="bg-[#01010140] z-30 backdrop-blur-[20px] rounded p-4 font-light items-center relative min-w-[21rem]"
        >
            <ol className="flex flex-col items-end">
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