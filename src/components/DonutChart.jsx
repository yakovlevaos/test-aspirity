"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ item }) => {
  const data = {
    datasets: [
      {
        data: [
          item.vacationAvailable,
          item.vacationPlanned,
          item.vacationUnavailable,
        ],
        backgroundColor: ["#25824F", "#FFB649", "#DB4546"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="relative w-40 h-40">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-4xl text-primary font-normal">
          {item.vacationAvailable}
        </div>
        <div className="text-sm text-tetriary">
          {item.vacationAvailable % 10 > 4 || item.vacationAvailable % 10 === 0
            ? "дней"
            : "дня"}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
