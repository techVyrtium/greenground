import { useTranslations } from "next-intl";
import React from "react";

export default function NowNearYou() {
  const t = useTranslations('nowNearYou');
  const data = [
    {
      title: t('title'),
      text: (
        <>
          <p className="text-white text-[33px] leading-[1] text-justify">
            {t('text.part1')}
            <span className="font-bold">{t('text.strong1')}</span>
            {t('text.part2')}<span className="font-bold">{t('text.strong2')}</span>{t('text.part3')}
            <span className="font-bold">{t('text.strong3')}</span>
          </p>
        </>
      ),
    },
  ];
  return (
    // h-fit h-[700px]
    <section className="mt-[96px] hidden md:block p-[clamp(1rem,5vw,6rem)] w-full h-fit bg-[url(/home/bg-red.png)] bg-cover bg-no-repeat">
      <div className=" flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img src="/home/Frame171.png" className="w-[600px] h-auto" />
        </div>
        <div className="flex flex-col justify-around lg:w-1/2 w-full h-fit">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src="/home/aroBird.png"
                className="w-[140px] md:w-[180px] lg:w-[220px] xl:w-[270px] h-auto object-contain"
              />
            </div>
            <div className="ml-4 flex flex-1">
              <h2
                className={`text-[clamp(78px,4.6vw,120px)] lg:text-[clamp(48px,4.6vw,96px)] text-[#fff] mb-12 leading-[1.1] font-bold font-itcGBold whitespace-nowrap`}
                dangerouslySetInnerHTML={{ __html: data[0].title }}
              />
            </div>
          </div>
          <div className="space-y-4 mt-8 text-justify">{data[0].text}</div>
          <div className="flex flex-row gap-8 lg:gap-[1vw] max-[465px]:gap-6 w-fit mt-8 m-auto">
            <img src="/home/GFICON.png" className=" w-[126px] md:w-[156px] h-full" />
            <img
              src="/home/MICICON.png"
              className="w-[126px] md:w-[170px] h-full"
            />
            <img
              src="/home/READYICON.png"
              className=" w-[126px] md:w-[156px] h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
