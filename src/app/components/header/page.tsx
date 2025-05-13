const Header = () => {
  return (
    <header className="flex justify-center bg-[var(--headerBgColor)] border-b-[1px] border-b-[var(--headerBorder))] w-full">
      <div className="flex justify-center items-center w-full max-w-1440px min-h-[80px]">
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
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
