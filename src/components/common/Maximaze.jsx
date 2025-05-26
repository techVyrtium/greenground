'use client'

import Image from "next/image"

export const Maximaze = ({ children, maximaze, setMaximaze }) => {
    return (
        <>
            {
                maximaze ? (
                    <div className={`${maximaze ? 'block' : 'hidden'} bg-black top-0 bottom-0 left-0 right-0 fixed z-40 overflow-y-hidden maximaze`}>
                        <Image src={'/close.svg'} alt="close" width={32} height={32} className="absolute right-4 top-4 z-40 cursor-pointer" onClick={() => setMaximaze(false)} />
                        {children}
                    </div>) : (<>{children}</>)
            }
        </>
    )
}