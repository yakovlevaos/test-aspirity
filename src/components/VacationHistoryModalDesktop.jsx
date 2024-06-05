import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const VacationHistoryModalDesktop = ({
  isOpen,
  closeModal,
  vacationHistory,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto flex items-center justify-center z-10"
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPanel className="w-full md:max-w-[900px] transform overflow-hidden rounded-2xl transition-all border border-primary">
            <div className="flex flex-col bg-bgGray  px-4 py-4 rounded-xl ">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-2xl text-primary">История отпусков</p>
                    </div>
                    <div>
                      <XMarkIcon
                        className="size-5 border-1 fill-primary hover:fill-blue cursor-pointer"
                        onClick={closeModal}
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
                                  item.type === "Отпуск"
                                    ? `fill-yellow`
                                    : `fill-red`
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
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default VacationHistoryModalDesktop;
