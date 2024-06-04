import React from "react";
import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import progressBar from "../assets/img/progress-bar.png";

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
    vacationAvailable: 32,
    vacationPlanned: 8,
    vacationUnavailable: 4,
  },
];

export default function Stats() {
  return (
    <div className="flex flex-col justify-start bg-bgGray rounded-xl gap-y-4">
      <div className="flex flex-row gap-2 px-4 pt-8">
        <p className="text-primary text-base font-medium">Статистика</p>
        <InformationCircleIcon className="size-6 border-primary stroke-primary fill-bgGray" />
      </div>
      <div className="place-self-center">
        <Image src={progressBar} alt="stats" />
      </div>
      <div className="flex flex-col">
        {json.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start px-4 pb-7 gap-y-1.5"
          >
            <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3">
              <div className="flex justify-start items-center gap-x-2">
                <div className="bg-green w-1.5 h-1.5 rounded-full"></div>
                <div>
                  <p className="text-primary text-base">Доступно сейчас</p>
                </div>
              </div>
              <div>
                <p className="text-primary">
                  {item.vacationAvailable}&nbsp;
                  {item.vacationAvailable % 10 > 4 ||
                  item.vacationAvailable % 10 === 0
                    ? "дней"
                    : "дня"}
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3">
              <div className="flex justify-start items-center gap-x-2">
                <div className="bg-yellow w-1.5 h-1.5 rounded-full"></div>
                <div>
                  <p className="text-primary text-base">Запланировано</p>
                </div>
              </div>
              <div>
                <p className="text-primary">
                  {item.vacationPlanned}&nbsp;
                  {item.vacationPlanned % 10 > 4 ||
                  item.vacationPlanned % 10 === 0
                    ? "дней"
                    : "дня"}
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3">
              <div className="flex justify-start items-center gap-x-2">
                <div className="bg-red w-1.5 h-1.5 rounded-full"></div>
                <div>
                  <p className="text-primary text-base">
                    Использовано/недоступно
                  </p>
                </div>
              </div>
              <div>
                <p className="text-primary">
                  {item.vacationUnavailable}&nbsp;
                  {item.vacationUnavailable % 10 > 4 ||
                  item.vacationUnavailable % 10 === 0
                    ? "дней"
                    : "дня"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
