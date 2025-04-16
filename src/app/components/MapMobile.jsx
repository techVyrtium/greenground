import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
export const MapMobile = () => {
    const globalAnimation = {
        offscreen: { opacity: 1 },
        onscreen: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        },
        exit: {
            opacity: 1,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    }
    const titleAnimation = {
        offscreen: { opacity: 0, x: -2550 },
        onscreen: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: -100 },
    }
    const mapAnimation = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    }
    const locationsAnimation = {
        offscreen: { opacity: 1, y: -100 },
        onscreen: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: -100 },
    }
    const boatAnimation = {
        offscreen: { opacity: 0, y: -50 },
        onscreen: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    }
    const flyerAnimation = {
        offscreen: { opacity: 0, y: 200 },
        onscreen: { opacity: 1, y: 0 },
        exit: { opacity: 0, },
    }
    return (
        <section className="w-full relative h-[37rem] my-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`animation-map`}
                    variants={globalAnimation}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.8, once: false }}
                    exit={"exit"}
                    className="relative w-full h-[37rem] bg-[image:url(/home/banana-patterns.png)] bg-cover bg-no-repeat bg-white"
                >
                    <motion.h2
                        variants={titleAnimation}
                        transition={{
                            type: "tween",
                            duration: 0.7,
                            delay: 0,
                        }}
                        className="text-[#157548] text-[clamp(28px,1.75vw,48px)] leading-[1.1] font-itcGBook p-4 relative z-20"
                    >

                        Hemos <span className="font-itcGBold">conquistado</span> el globo <span className="font-itcGBold">con nuestros productos</span>
                    </motion.h2>
                    <div className="absolute h-[30rem] max-w-full top-0">
                        <motion.div
                            variants={mapAnimation}
                            className="max-w-full h-full"
                        >
                            <Image
                                className="max-w-full h-full"
                                src={'/home/map/single-map.png'}
                                width={700}
                                height={800}
                                alt="single-map"
                            />
                        </motion.div>
                        <motion.div
                            variants={locationsAnimation}
                            transition={{
                                type: "spring",
                                duration: 0.7,
                                delay: 0
                            }}
                        >
                            <Image
                                className="max-w-full h-full absolute top-0 left-0"
                                src={'/home/map/locations-map.png'}
                                width={700}
                                height={800}
                            />
                        </motion.div>
                        <motion.div
                            className="bottom-[20%] left-[5%] absolute"
                            variants={boatAnimation}
                        >
                            <Image
                                src={'/home/map/boat.png'}
                                width={80}
                                height={80}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={flyerAnimation}
                        className="absolute bottom-4  mx-auto left-4 right-4 flex flex-row justify-between gap-4"
                    >
                        <Image
                            className="h-[min(190px,40vw)]"
                            src={'/home/map/flyer.png'}
                            width={113}
                            height={190}
                            alt="flyer"
                        />

                        <div className="flex flex-col w-[max(16rem,50vw)] items-end justify-end gap-4">
                            <p className="text-[max(13px,3vw)] w-fit font-itcGBook text-[#137E1A] text-right leading-[min(1.3rem,3.5vw)] max-[390px]:leading-[min(1.3rem,3.5vw)]">
                                Somos comercializadores internacionales con exportaciones efectivas alrededor de <span className="font-bold font-itcGBold">20 países</span> en mercados de América, Europa y Oceanía
                            </p>
                            <Link href={'/'} className="bg-[#157548] text-[#FEF8F1] font-bold p-3 rounded w-full inline-block text-center">
                                Descarga el Flyer
                            </Link>
                        </div>

                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </section>


    )
}