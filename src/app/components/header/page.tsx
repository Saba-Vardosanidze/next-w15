const Header = () => {
  return (
    <header className="flex justify-center bg-[var(--headerBgColor)] border-b-[1px] border-b-[var(--headerBorder))] w-full">
      <div className="flex justify-between items-center px-[80px] w-full max-w-[1440px] min-h-[80px]">
        <div className="w-[231px] font-bold text-[34px] text-[var(--colorWhite)]">
          LOGO
        </div>
        <ul className="flex gap-x-[32px]">
          <li className="font-medium text-[var(--colorWhite)] cursor-pointer">
            Home
          </li>
          <li className="font-medium text-[var(--colorWhite)] cursor-pointer">
            dashboard
          </li>
          <li className="font-medium text-[var(--colorWhite)] cursor-pointer">
            Blog
          </li>
          <li className="font-medium text-[var(--colorWhite)] cursor-pointer">
            Help Center
          </li>
          <li className="font-medium text-[var(--colorWhite)] cursor-pointer">
            About
          </li>
        </ul>
        <div className="flex gap-[16px] w-[231px]">
          <button className="border-[2px] rounded-[40px] w-[116px] h-[46px] text-[var(--colorWhite)] cursor-pointer">Sign Up</button>
          <button className="bg-[var(--colorWhite)] rounded-[40px] w-[99px] h-[46px] cursor-pointer">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
