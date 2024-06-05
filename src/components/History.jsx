"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import VacationHistoryModal from "@/components/VacationHistoryModal";
import VacationHistoryModalDesktop from "@/components/VacationHistoryModalDesktop";

export default function History({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDesktopOpen, setIsModalDesktopOpen] = useState(false);
  const vacationHistory = item.vacationHistory;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModalDesktop() {
    setIsModalDesktopOpen(true);
  }

  function closeModalDesktop() {
    setIsModalDesktopOpen(false);
  }

  return (
    <div className="flex flex-col bg-bgGray rounded-xl px-4 py-8 w-full md:px-7 md:pt-7 md:ml-4 md:min-w-4/6 md:max-w-[962px]">
      <div className="hidden md:flex flex-col gap-y-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl text-primary font-normal">
                История отпусков
              </p>
            </div>
            <div onClick={openModalDesktop}>
              <p className="text-sm text-right text-tetriary font-medium hover:text-primary cursor-pointer">
                Посмотреть все
              </p>
              <VacationHistoryModalDesktop
                isOpen={isModalDesktopOpen}
                closeModal={closeModalDesktop}
                vacationHistory={vacationHistory}
              />
            </div>
          </div>
        </div>
        <table className="table-fixed">
          <thead className="border-b border-gray">
            <tr>
              <th className="px-2 py-4 text-left text-base text-secondary font-normal w-[41.5%]">
                Тип
              </th>
              <th className="px-2 py-4 text-left text-base text-secondary font-normal w-[41.5%]">
                Даты отпуска
              </th>
              <th className="px-2 py-4 text-right text-base text-secondary font-normal">
                Количество дней
              </th>
            </tr>
          </thead>
          <tbody>
            {vacationHistory
              .filter((item) => item.id <= 5)
              .map((item) => (
                <tr
                  key={item.id}
                  className={
                    item.id !== vacationHistory.length
                      ? "border-b border-gray"
                      : ""
                  }
                >
                  <td className="px-2 py-4 text-left text-base text-primary">
                    {item.type}
                  </td>
                  <td className="flex justify-start gap-x-3 px-2 py-4 text-left text-base text-primary">
                    <div className="text-base">{item.start}</div>
                    <div>
                      <ArrowRightIcon
                        className={`size-6 border-1 ${
                          item.type === "Отпуск" ? `fill-yellow` : `fill-red`
                        }`}
                      />
                    </div>
                    <div>{item.finish}</div>
                  </td>
                  <td className="px-2 py-4 text-right text-base text-primary">
                    {item.daysNumber}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-y-2 md:hidden">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="text-base text-primary font-medium">
                История отпусков
              </p>
            </div>
            <div onClick={openModal}>
              <p className="text-sm text-tetriary font-medium hover:text-primary cursor-pointer">
                Посмотреть все
              </p>
              <VacationHistoryModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                vacationHistory={vacationHistory}
              />
            </div>
          </div>
        </div>
        {vacationHistory
          .filter((item) => item.id <= 5)
          .map((item) => (
            <div key={item.id} className="flex flex-col gap-y-3 pt-2">
              <div className="flex flex-col justify-start gap-y-2">
                <div>
                  <p className="text-base text-tetriary">Тип</p>
                </div>
                <div>
                  <p className="text-base text-primary">{item.type}</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-y-3">
                <div>
                  <p className="text-base text-tetriary">Даты отпуска</p>
                </div>
                <div className="flex justify-start items-center gap-x-3 text-base text-secondary">
                  <div>{item.start}</div>
                  <div>
                    <ArrowRightIcon
                      className={`size-5 border-1 ${
                        item.type === "Отпуск" ? `fill-yellow` : `fill-red`
                      }`}
                    />
                  </div>
                  <div>{item.finish}</div>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-y-3">
                <div>
                  <p className="text-base text-tetriary">Количество дней</p>
                </div>
                <div>
                  <p className="text-base text-primary">{item.daysNumber}</p>
                </div>
              </div>
              {item.id === vacationHistory.length ? null : (
                <div className="w-full">
                  <div className="h-0.5 bg-gray"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
