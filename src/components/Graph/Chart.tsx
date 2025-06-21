import React from "react";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const data: ChartData<"line"> = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Unsatisfied Demand %",
      data: [40000, 20000, 45000, 100000, 60000, 30000, 40000],
      borderColor: "#C9FF3B",
      backgroundColor: "#C9FF3B",
      tension: 0,
      pointBackgroundColor: "#121212",
      pointBorderColor: "#C9FF3B",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      backgroundColor: "#1e1e1e",
      borderColor: "#555",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#fff",
      callbacks: {
        label: (context) => {
          const value = context.parsed.y;
          return `$${(value / 1000).toFixed(0)}K`;
        },
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#BBBBBB",
      },
      grid: {
        color: "#2c2c2c",
      },
    },
    y: {
      min: 0,
      max: 120000,
      beginAtZero: true,
      ticks: {
        stepSize: 20000,
        color: "#BBBBBB",
        callback: (value: number | string) => `$${(+value / 1000).toFixed(0)}K`,
      },
      grid: {
        color: "#2c2c2c",
      },
    },
  },
};

const Chart = () => {
  return (
    <div className="bg-[##00000040] p-6 rounded-xl border border-[#333] w-[56%] h-full">
      <div className="h-full min-h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
