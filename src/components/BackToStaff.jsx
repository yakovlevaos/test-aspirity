import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function BackToStuff() {
  return (
    <div className="flex justify-start items-center px-4 py-3 gap-x-3 mt-1 mb-2">
      <ChevronLeftIcon className="size-5 fill-tetriary" />
      <button className="text-tetriary uppercase text-sm font-semibold hover:text-primary">
        вернуться к сотрудникам
      </button>
    </div>
  );
}
