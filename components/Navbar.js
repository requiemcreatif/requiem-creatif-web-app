import React from "react";
import Logo from "../images/Logo.svg";
import Image from "next/image";
import MenuIcon from "../images/MenuIcon.svg";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between px-10 py-5 bg-white">
        <Image className=" w-12 text-black" src={Logo} alt="Logo requiem" />
        <Image className=" w-14 lg:hidden" src={MenuIcon} alt="Icon menu" />
      </div>
    </div>
  );
};

export default Navbar;
