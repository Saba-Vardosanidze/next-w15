import { sideBarInfo } from "@/app/data/sideBar"
import Link from "next/link"
const SideBar = () => {
  return (
    <div className="absolute bg-[var(--headerBgColor)] px-[16px] py-[32px] w-full max-w-[201px] h-full min-h-[606px]">
      <div className="flex flex-col gap-[32px]">
        {sideBarInfo.map((eachElement)=> (
        <div className="flex items-center gap-[16px]">
          <div className="flex justify-center items-center bg-[#F3F3F310] rounded-[6px] w-[40px] h-[40px]"><img src={eachElement.images} alt={eachElement.imgDescription} /></div>
          <Link href={eachElement.url}>
          <p className="text-[var(--colorWhite)] hover:text-[var(--paragraphHover)] transition-all">{eachElement.title}</p>
          </Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
