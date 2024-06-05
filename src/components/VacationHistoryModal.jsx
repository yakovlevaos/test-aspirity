import {
  Dialog,
  Transition,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const VacationHistoryModal = ({ isOpen, closeModal, vacationHistory }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-fulд">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full transform overflow-hidden rounded-2xl transition-all">
                <div className="flex flex-col bg-bgGray rounded-xl px-4 py-4">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-base text-primary font-medium">
                            История отпусков
                          </p>
                        </div>
                        <div>
                          <XMarkIcon
                            className="size-5 border-1 fill-primary hover:fill-blue cursor-pointer"
                            onClick={closeModal}
                          />
                        </div>
                      </div>
                    </div>
                    {vacationHistory.map((item) => (
                      <div key={item.id} className="flex flex-col gap-y-4">
                        <div className="flex flex-col justify-start gap-y-1.5">
                          <div>
                            <p className="text-base text-tetriary">Тип</p>
                          </div>
                          <div>
                            <p className="text-base text-primary">
                              {item.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start gap-y-2">
                          <div>
                            <p className="text-base text-tetriary">
                              Даты отпуска
                            </p>
                          </div>
                          <div className="flex justify-start items-center gap-x-3 text-base text-secondary">
                            <div>{item.start}</div>
                            <div>
                              <ArrowRightIcon
                                className={`size-5 border-1 ${
                                  item.type === "Отпуск"
                                    ? `fill-yellow`
                                    : `fill-red`
                                }`}
                              />
                            </div>
                            <div>{item.finish}</div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start gap-y-2">
                          <div>
                            <p className="text-base text-tetriary">
                              Количество дней
                            </p>
                          </div>
                          <div>
                            <p className="text-base text-primary">
                              {item.daysNumber}
                            </p>
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
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VacationHistoryModal;
