'use client'
import Image from "next/image"
import { useState } from "react"
export const WorkerTestimonials = () => {
    return (
        <section className="bg-[image:url(/home/bg-green.png)] w-full mt-24">
            <Slider>
                <Testimonial
                    image={`/home/worker-testimonials/maria-castro.png`}
                    name="Maria Castro"
                    job="Gerente de planta"
                    text={"“Queremos retribuir a la sociedad apoyando diferentes comunidades y fundaciones, además nuestra política de empleo se basa en la contratación de mujeres cabeza de hogar equivalente a un 80% de nuestro personal”"}
                />
                <Testimonial
                    image={`/home/worker-testimonials/maria-castro.png`}
                    name="Maria Castro2"
                    job="Gerente de planta"
                    text={"“Queremos retribuir a la sociedad apoyando diferentes comunidades y fundaciones, además nuestra política de empleo se basa en la contratación de mujeres cabeza de hogar equivalente a un 80% de nuestro personal”"}
                />
                <Testimonial
                    image={`/home/worker-testimonials/maria-castro.png`}
                    name="Maria Castro3"
                    job="Gerente de planta"
                    text={"“Queremos retribuir a la sociedad apoyando diferentes comunidades y fundaciones, además nuestra política de empleo se basa en la contratación de mujeres cabeza de hogar equivalente a un 80% de nuestro personal”"}
                />
            </Slider>

        </section>
    )
}
const Testimonial = ({ image, name, job, text, className = "" }) => {
    return (
        <div className={`flex flex-col items-center flex-wrap rounded-2xl w-fit bg-white border border-border-gray text-gray1 p-6 gap-6 shadow-[4px_4px_13.3px_5px_#00000040] md:flex-row${className}`}>
            <div className="flex flex-col items-center gap-1">
                <Image src={image} alt={`image-${name}`} width={200} height={200} className="rounded-full w-36 h-36 object-cover shadow-[4px_-2px_12px_0px_#00000040]" />
                <span className="text-green700 font-bold">{name}</span>
                <span className="font-bold">{job}</span>
            </div>
            <p className="font-light italic w-[60vw] text-2xl lg:text-[28px] tracking-normal leading-[normal] max-w-[40rem] md:text-[26px] md:w-[33rem]">
                {text}
            </p>
        </div>
    )
}
export const Slider = ({ children, className = "" }) => {
    const { length } = children;
    const [currentItem, setCurrentItem] = useState(0);
    const handleChangeSlide = (step) => {
        if (step > 0 && currentItem === length - 1) {
            setCurrentItem(0)
            return;
        }
        if (step < 0 && currentItem === 0) {
            setCurrentItem(length - 1)
            return;
        }
        setCurrentItem(currentItem + step);

    }
    return (
        <div className={`flex justify-between relative overflow-hidden px-20 max-w-[1021px] py-8 m-auto ${className}`}>
            <Image src={'/home/arrowL.svg'} height={60} width={60} alt="back" className="cursor-pointer absolute bottom-20 left-3 z-10" onClick={() => handleChangeSlide(-1)} />
            <div className={`flex flex-row flex-nowrap flex-none overflow-x-visible duration-200`} style={{ transform: `translateX(${currentItem * -60}vw)` }}>
                {
                    children.map((child, index) => (
                        <div key={`slider-child-${index}`} className="mx-[5vw]">
                            {child}
                        </div>
                    ))
                }                
            </div>
            <Image src={'/home/arrowR.svg'} height={60} width={60} alt="next" className="cursor-pointer absolute bottom-20 right-3" onClick={() => handleChangeSlide(1)} />
            <div className="flex gap-2 m-auto absolute bottom-0 left-[47%]">
                {
                    new Array(length).fill(0).map((_, i) => (
                        <div key={`item-${i}-slider`} className={`w-4 h-4 rounded-full ${i === currentItem ? `bg-[#8AEABD]` : `bg-gray2`}`}></div>
                    ))
                }
            </div>
        </div>
    )
}