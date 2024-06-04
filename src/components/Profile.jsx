import React from "react";
import Image from "next/image";
import avatar from "../assets/img/avatar.svg";

const json = [
  {
    id: "1",
    avatar: "avatar",
    personFamilyName: "Иванов",
    personFirstName: "Иван",
    personPatronymic: "Иванович",
    position: "Junior UI/UX designer",
    location: "Россия, Красноярск",
    time: "14:03",
  },
];

export default function Profile() {
  return (
    <div className="bg-bgGray rounded-xl gap-y-2 pt-8 pb-7">
      <div className="flex flex-col gap-y-6">
        {json.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-8"
          >
            <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row md:justify-start md:items-start">
              <Image src={avatar} alt="avatar" className="size-[160px]" />
              <div className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-8 lg:pl-10">
                <div className="flex flex-col justify-center items-center text-primary text-2xl font-bold md:justify-start md:items-start md:text-3xl lg:text-5xl md:my-6">
                  <p>{item.personFamilyName}</p>
                  <div className="flex">
                    <p>{item.personFirstName}&nbsp;</p>
                    <p>{item.personPatronymic}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-4 md:justify-start md:items-start md:mt-8">
                  <p className="text-base text-primary">{item.position}</p>
                  <div className="flex justify-center items-center gap-x-2">
                    <p className="text-base text-primary">{item.location}</p>
                    <div className="bg-tetriary w-1 h-1 rounded-full"></div>
                    <p className="text-base text-tetriary">{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex ml-4 text-nowrap uppercase text-sm font-semibold text-secondary truncate">
          <div className="border-b-[1px] px-4 pb-2 pt-2 border-b-gray">
            <p>основная информация</p>
          </div>
          <div className="border-b-2 px-4 pb-2 pt-2 border-b-blue">
            <p className="text-primary">отпуск</p>
          </div>
          <div className="border-b-[1px] px-4 pb-2 pt-2 border-b-gray">
            <p>оборудование</p>
          </div>
        </div>
      </div>
    </div>
  );
}
