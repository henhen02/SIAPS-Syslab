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

const BarChart = ({ forlabels, fordatasets }) => {
  const data = {
    labels: forlabels,
    datasets: [
      {
        label: "Permintaan Sampling",
        data: fordatasets,
        borderWidth: 1,
        borderColor: "rgba(61, 181, 75, 1)",
        backgroundColor: "rgba(61, 181, 75, .2)",
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
