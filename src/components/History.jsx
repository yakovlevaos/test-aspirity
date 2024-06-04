import React from "react";
import Image from "next/image";
import avatar from "../assets/img/avatar.svg";

const vacationHistoryJson = [
  {
    id: "1",
    type: "Отпуск",
    start: "03 марта 2023",
    finish: "23 марта 2023",
    number: "20",
  },
  {
    id: "2",
    type: "Больничный",
    start: "03 марта 2023",
    finish: "07 марта 2023",
    number: "4",
  },
  {
    id: "3",
    type: "Больничный",
    start: "03 марта 2023",
    finish: "07 марта 2023",
    number: "4",
  },
  {
    id: "4",
    type: "Больничный",
    start: "03 марта 2023",
    finish: "07 марта 2023",
    number: "4",
  },
  {
    id: "5",
    type: "Больничный",
    start: "03 марта 2023",
    finish: "07 марта 2023",
    number: "4",
  },
];

export default function History() {
  return (
    <div className="flex flex-col bg-bgGray rounded-xl px-4 py-8 gap-y-4">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div>
            <p className="text-base text-primary font-medium">
              История отпусков
            </p>
          </div>
          <div>
            <p className="text-sm text-tetriary font-medium">Посмотреть все</p>
          </div>
        </div>
      </div>
      <div>
        {vacationHistoryJson.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col justify-start gap-y-2">
                <div>
                  <p className="text-base text-tetriary">Тип</p>
                </div>
                <div>
                  <p className="text-base text-primary">{item.type}</p>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-y-2">
                <div>
                  <p className="text-base text-tetriary">Даты отпуска</p>
                </div>
                <div className="flex justify-start gap-x-2 text-base text-secondary">
                  <div>{item.start}</div>
                  <div></div>
                  <div>{item.finish}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
