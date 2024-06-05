import Image from "next/image";
import LogoMobile from "../assets/img/Logo_mobile.svg";
import Logo from "../assets/img/Logo.svg";

import Menu from "./Menu";

export default function Header({ item }) {
  return (
    <div className="flex justify-between px-4 py-6 mb-1 md:px-0">
      <Image src={LogoMobile} alt="LogoMobile" className="block md:hidden" />
      <Image src={Logo} alt="Logo" className="hidden md:block" />
      <Menu item={item} />
    </div>
  );
}
