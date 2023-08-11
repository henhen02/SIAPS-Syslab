import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Selesai tepat waktu",
        data: [24, 21, 27, 30, 16, 20, 31],
        borderWidth: 1,
        borderColor: "rgba(61, 181, 75, 1)",
        backgroundColor: "rgba(61, 181, 75, .2)",
      },
      {
        label: "Terlambat diselesaikan",
        data: [1, 2, 0, 3, 5, 0, 2],
        borderWidth: 1,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, .2)",
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <>
      <Bar data={data} options={option} />
    </>
  );
};

export default BarChart;
