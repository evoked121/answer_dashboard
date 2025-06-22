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
import { DownOutlined } from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

const verticalLinePlugin = {
  id: "verticalLine",
  afterDraw: (chart: any) => {
    if (chart.tooltip?._active?.length) {
      const ctx = chart.ctx;
      const activePoint = chart.tooltip._active[0].element;

      const x = activePoint.x;
      const y = activePoint.y;
      const bottomY = chart.scales.y.bottom;

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([6, 6]);
      ctx.moveTo(x, y);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#C9FF3B";
      ctx.stroke();
      ctx.restore();
    }
  },
};

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
  verticalLinePlugin
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
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    tooltip: {
      backgroundColor: "#1E1E1E",
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
        color: "#FFFFFF",
      },
      grid: {
        color: "#2C2C2C",
      },
    },
    y: {
      min: 0,
      max: 120000,
      beginAtZero: true,
      ticks: {
        stepSize: 20000,
        color: "#FFFFFF",
        callback: (value: number | string) => `$${(+value / 1000).toFixed(0)}K`,
      },
      grid: {
        color: "#2C2C2C",
      },
    },
  },
};

const Chart = () => {
  return (
    <div className="flex flex-col bg-[#222324] p-6 rounded-xl border-[1px] border-[#525252] w-full h-full">
      <div className="flex ml-auto items-center space-x-[5px] bg-[#18181A80] border-[1px] border-[#5A5A5AA1] rounded-md px-[10px] py-[4px] w-fit cursor-pointer">
        <div className="text-[#FFFFFF] text-[12px] font-medium">
          Unsatisfied Demand%
        </div>
        <DownOutlined style={{ color: "#FFFFFF" }} />
      </div>
      <div className="mt-[40px] h-full w-full min-h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
