import { useTranslations } from "next-intl";

export default function SolarEnergyStats() {
    const t = useTranslations("solarEnergyStats");

    return (
        <section className="md:mt-[100px] w-full h-full">
            <div className="px-[clamp(1rem,5vw,6rem)] grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
                <div className="flex flex-col items-start justify-center">
                    <h2
                        className={`text-[clamp(30px,6vw,50px)] font-bold text-[#008638] leading-[0.98] font-itcGBold lg:mt-0 mt-12 mb-2`}
                    >
                        {t('title')}
                    </h2>
                    <p className="text-[clamp(1.2rem,1.75vw,1.75rem)]  text-[#4A4A4A] leading-[1.3] lg:mt-4 text-left">
                        {t('text')}
                    </p>
                    <h2
                        className={`text-[clamp(15px,6vw,30px)] font-bold mt-4 text-[#008638] leading-[0.98] font-itcGBold`}
                    >
                        {t('subtitle')}
                    </h2>
                    <ul className="flex flex-col items-start justify-center">
                        <li className="flex items-start justify-start lg:mt-4">
                            <span className="h-4 w-4 bg-[#008638] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.3] text-left">
                                {t('bullet1')}
                            </p>
                        </li>
                        <li className="flex items-start justify-start lg:mt-2">
                            <span className="h-4 w-4 bg-[#008638] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.3] text-left">
                                {t('bullet2')}
                            </p>
                        </li>
                        <li className="flex items-start justify-start lg:mt-2">
                            <span className="h-4 w-4 bg-[#008638] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.3] text-left">
                                {t('bullet3')}
                            </p>
                        </li>
                        <li className="flex items-start justify-start lg:mt-2">
                            <span className="h-4 w-4 bg-[#008638] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.3] text-left">
                                {t('bullet4')}
                            </p>
                        </li>
                        <li className="flex items-start justify-start lg:mt-2">
                            <span className="h-4 w-4 bg-[#008638] rounded-full mr-2 flex-shrink-0 mt-2"></span>
                            <p className="text-[clamp(1.2rem,1.75vw,1.75rem)] text-[#4A4A4A] leading-[1.3] text-left">
                                {t('bullet5')}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row w-full h-full justify-start items-center">
                    <video
                        src="/home/solarEnergyStats.mp4"
                        autoPlay={true}
                        loop
                        muted={true}
                        className="w-full h-full object-cover rounded-bl-[20px] rounded-tr-[20px]"
                    />
                </div>
            </div>
        </section>
    )
}