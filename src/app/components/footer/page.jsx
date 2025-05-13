import { footerInfo,pagesName } from "@/app/data/data";
const Footer = () => {
  return (
    <footer className="flex justify-center bg-[var(--headerBgColor)] w-full h-[556px]">
      <div className="flex flex-col px-[80px] w-full max-w-[1440px]">
        <div className="flex justify-between items-center mt-[48px] w-full">
        <p className="font-bold text-[34px] text-[var(--colorWhite)]">
          LOGO
        </p>
        <div className="flex gap-[16px]">
          <div>
          <input type="text" placeholder="Enter your email to get the latest news..."  className="bg-[var(--colorWhite)] pl-[52px] outline-none w-[345px] h-[46px]"/>
          </div>
          <button className="bg-[var(--buttonColor)] w-[110px] h-[46px] text-[var(--colorWhite)] cursor-pointer">Search</button>
        </div>
        </div>
        <div className="bg-[var(--lineColor)] my-[48px] w-full h-[1px]"></div>
        <div className="flex">
        <div className="flex gap-[218px] text-[18px]">{footerInfo.map((eachElement) => (
          <div>
            <p className="mb-[28px] font-bold text-[var(--colorWhite)]">{eachElement.title}</p>
            <ul className="flex flex-col gap-[16px]">
                {eachElement.variant.map((link, index)=>(
                  <li className="font-medium text-[16px] text-[var(--colorWhite)]" key={index}><a href={link.href}>{link.value}</a></li>
                ))}
            </ul>
          </div>
        ))}</div>
        <div className="ml-[218px]">
          <p className="mb-[36px] text-[var(--colorWhite)]">Column Four</p>
          <div>
            <p  className="mb-[20px] font-bold text-[var(--colorWhite)]">Join Us</p>
            <div>
              </div>   
          </div>
        </div>
        </div>
        <div className="bg-[var(--lineColor)] my-[48px] w-full h-[1px]"></div>
        <div className="flex justify-between">
          <p className="font-medium text-[14px] text-[var(--colorWhite)]">Greelogix @ 202X. All rights reserved.</p>
          <ul className="flex gap-[24px] font-medium text-[var(--colorWhite)]">
            {pagesName.map((eachElement) => (
              <li>{eachElement.page}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
