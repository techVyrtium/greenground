import Link from "next/link"
import { useState } from "react"
import { FaChevronDown } from 'react-icons/fa';
export const NavLinkMultiple = ({ title, options = [] }) => {
    const [open, setOpen] = useState(false);
    const toogleOptions = () => {
        setOpen(!open);
    }
    return (
        <div className="relative">
            <span onClick={toogleOptions} className="hover:underline hover:font-bold cursor-pointer flex items-center gap-1">
                {title} <FaChevronDown fillOpacity={0.85} className="w-4 h-4"/>
            </span>
            {open && (<ol className="absolute top-8 z-10 bg-[#1B925A] rounded p-4 w-max font-light">
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