'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function NotFound() {
    const { locale } = useParams();
    const pathname = usePathname();
    return (
        <div className="p-5 min-h-[50lvh] mt-16 m-auto text-center">
            <h2 className="text-[50px] text-[#00863880] font-itcGBold leading-12 lg:leading-12 md:leading-8 mt-[15%]">404</h2>
            <span className="mb-4 text-[38px] mt-4 text-[#00863880] font-bold font-itcGBold leading-12">PAGE NOT FOUND</span>
            <p className="mb-4 text-[min(26px,7vw)] mt-4 text-[#00863880] font-bold font-itcGBold leading-12">{locale === 'en' ? "Sorry, not exist page: " : "Lo sentimos, no existe la pagina: "} {pathname} </p>
            <Link href={'/'} className="hover:underline font-bold text-[24px] text-[#008638]">{locale === 'en' ? "We invite you to review the main page" : "te invitamos a que revises en la pagina principal"}</Link>
        </div>
    )
}