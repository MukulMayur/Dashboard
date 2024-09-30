import React from "react";
import TopDisplay from "../Components/Home_Components/TopDisplay";
import Analytics from "../Components/Home_Components/Analytics";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Home() {
  const barChartData = {
    labels: ["A", "B", "C", "D", "E", "F", "G"],
    datasets: [
      {
        label: "My Dataset",
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      x: {
        grid: {
          offset: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col">
      <div className="px-3 pt-3 md:p-0 lg:p-0">
        <Analytics />
      </div>
      <div className="flex flex-col md:flex lg:flex-row p-2 space-x-2">
        <TopDisplay />
      </div>
      <div className="flex flex-1 px-3 gap-4 bg-[#010409]">
        <div className="flex w-full rounded-xl h-[50vh] bg-[#282828] p-4">
          <Bar data={barChartData} options={barChartOptions} />{" "}
          {/* Pass data and options correctly */}
        </div>
        <div className="flex w-full  rounded-xl h-[50vh] p-4 bg-[#282828]">
          Chart1
        </div>
      </div>
    </div>
  );
}

export default Home;
