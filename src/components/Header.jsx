import imgLogo from "../assets/logo.svg";
import Menu from "./Menu";
import "./Menu.css";
import { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  });

  return (
    <div className="flex justify-between items-center text-[1rem] sm:text-[1.4rem] font-[Poppins] w-full sm:w-[70vw] h-[6vh] sm:h-[10vh] ">
      <img
        className=" w-30 h-12 sm:w-40 ml-4 sm:ml-0"
        src={imgLogo}
        alt="logo"
      />

      <div className=" hidden lg:w-[55vw] lg:h-[10vh] lg:flex lg:items-center lg:justify-evenly ">
        <Menu />
      </div>

      <div className=" mr-4 lg:hidden ">
        <Hamburger toggled={isOpen} toggle={setIsOpen} heigth={15} />
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Header;
