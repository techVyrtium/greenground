import { ListType } from "@/seed/news"
import { useId } from "react"

export const ListContent = ({ list }) => {
    const id = useId();
    return (
        list.type === ListType.ORDER ? (
            <ol className="list-decimal marker:text-[#008638] marker:font-itcGBold marker:text-[25px] marker:font-bold text-[#4A4A4A] text-[24px] text-justify">
                {list.items.map((item, i) => (
                    <li key={`list-item-${id}-${i}`} className={`ml-8 mb-3 text-left text-[20px] leading-6`}>
                        {item}
                    </li>
                ))}
            </ol>
        ) : (
            <ul className="list-disc marker:text-[#008638] marker:font-itcGBold marker:text-[25px] marker:font-bold text-[#4A4A4A] text-[24px] text-justify">
                {list.items.map((item, i) => (
                    <li key={`list-item-${id}-${i}`} className={`ml-8 mb-3 text-left text-[20px] leading-6`}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    )
}