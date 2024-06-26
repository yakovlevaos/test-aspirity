import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Menu({ item }) {
  return (
    <div className="flex justify-between items-center gap-x-1.5 md:gap-x-2">
      <button className="hidden md:flex bg-blue text-primary text-sm font-semibold uppercase py-2.5 px-4 rounded-sm hover:bg-opacity-60">
        создать счет
      </button>
      <button className="hidden md:flex bg-blue text-primary text-sm font-semibold uppercase py-2.5 px-4 rounded-sm hover:bg-opacity-60">
        корзина
      </button>
      <div className="flex justify-center border border-gray rounded-3xl px-4 py-1.5">
        <Image
          key={item.id}
          src={`/assets/avatars/${item.avatar}`}
          alt="avatar"
          width={24}
          height={24}
        />

        <button className="flex justify-center items-center size-6">
          <ChevronDownIcon className="size-5 border-1 fill-primary hover:fill-blue" />
        </button>
      </div>
      <div className="p-[8px]">
        <button className="flex justify-center items-center size-6">
          <Bars3Icon className="size-6 fill-primary hover:fill-blue" />
        </button>
      </div>
    </div>
  );
}
