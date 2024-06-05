import React from "react";
import DonutChart from "@/components/DonutChart";
import Popover from "@/components/Popover";

export default function Stats({ item }) {
  return (
    <div className="flex flex-col w-full justify-start bg-bgGray pb-4 rounded-xl gap-y-4 mb-4 md:gap-y-2 md:mb-0 md:min-w-2/6 md:max-w-[516px]">
      <div className="flex flex-row justify-start items-center gap-2 px-4 pt-8 md:px-7 md:pt-7 md:pb-3">
        <p className="text-primary text-base font-medium md:text-2xl md:font-normal">
          Статистика
        </p>
        <Popover />
      </div>
      <div className="place-self-center">
        <DonutChart item={item} />
      </div>
      <div className="flex flex-col">
        <div
          key={item.id}
          className="flex flex-col justify-start items-start px-4 pb-7 gap-y-1.5 md:px-7 md:pt-1"
        >
          <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3 hover:border-primary">
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
          <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3 hover:border-primary">
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
          <div className="flex justify-between w-full border border-gray rounded-2xl px-2.5 py-3 hover:border-primary">
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
      </div>
    </div>
  );
}
