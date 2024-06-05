import React from "react";
import Image from "next/image";

export default function Profile({ item }) {
  return (
    <div className="w-full bg-bgGray rounded-xl gap-y-2 pt-8 pb-7 md:pt-10 md:pb-4">
      <div className="flex flex-col gap-y-6 md:gap-y-14">
        <div className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-10">
          <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row md:justify-start md:items-start">
            <Image
              src={`/assets/avatars/${item.avatar}`}
              alt="avatar"
              width={160}
              height={160}
            />
            <div className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-12">
              <div className="flex flex-col justify-center items-center text-primary text-2xl font-bold md:justify-start md:items-start md:text-5xl md:pt-7">
                <p>{item.personFamilyName}</p>
                <div className="flex md:mt-2">
                  <p>{item.personFirstName}&nbsp;</p>
                  <p>{item.personPatronymic}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-4 md:justify-start md:items-start md:mt-3">
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
        <div className="flex ml-4 text-nowrap uppercase text-sm font-semibold truncate md:ml-10">
          <div className="border-b-[1px] px-4 pb-2 pt-2 border-b-gray">
            <p className=" text-secondary hover:text-primary cursor-pointer">
              основная информация
            </p>
          </div>
          <div className="border-b-2 px-4 pb-2 pt-2 border-b-blue ">
            <p className="text-primary hover:text-blue cursor-pointer">
              отпуск
            </p>
          </div>
          <div className="border-b-[1px] px-4 pb-2 pt-2 border-b-gray">
            <p className=" text-secondary hover:text-primary cursor-pointer">
              оборудование
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
