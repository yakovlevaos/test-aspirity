import Image from "next/image";
import Logo from "../assets/img/Logo.svg";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex justify-between px-4 py-6 mb-1">
      <Image src={Logo} alt="Logo" />
      <Menu />
    </div>
  );
}
