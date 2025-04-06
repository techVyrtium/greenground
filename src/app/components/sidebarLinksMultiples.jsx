import Link from "next/link"
import { useState } from "react"
import { FaChevronDown } from 'react-icons/fa';
export const SidebarLinksMultiples = ({ title, options = [] }) => {
    const [open, setOpen] = useState(false);
    const toogleOptions = () => {
        setOpen(!open);
    }
    return (
        <div className="relative flex flex-col items-center gap-2">
            <span onClick={toogleOptions} className="hover:underline hover:font-bold cursor-pointer flex items-center gap-1">
                {title} <FaChevronDown fillOpacity={0.85} className="w-4 h-4" />
            </span>
            {open && (<ol className="top-8 z-10 bg-category-title-bold rounded p-4 pl-8 font-light w-4/5 items-center">
                {
                    options.map(({ id, text, href }) => (
                        <li key={id} className="mb-1">
                            <Link href={href} className="hover:underline hover:font-bold cursor-pointer">{text}</Link>
                        </li>
                    ))
                }
            </ol>)
            }
        </div>
    )
}