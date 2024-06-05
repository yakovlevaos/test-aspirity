"use client";
import { useState, useRef, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function Popover() {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef();

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex items-center"
      onClick={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InformationCircleIcon className="size-6 border-primary stroke-primary fill-bgGray" />
      {isVisible && (
        <div
          ref={popoverRef}
          className="absolute left-full ml-4 z-10 bg-popover text-primary px-2.5 py-1.5 text-sm whitespace-nowrap"
        >
          <p>1 раб. месяц = 3 дня отпуска</p>
        </div>
      )}
    </div>
  );
}
