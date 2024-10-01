import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40, 59, 52, 64, 78, 88],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(201, 203, 207, 0.8)",
          "rgba(101, 203, 107, 0.8)",
          "rgba(201, 122, 107, 0.8)",
          "rgba(66, 189, 187, 0.8)",
          "rgba(201, 203, 207, 0.8)",
          "rgba(101, 103, 11, 0.8)", // Fixed the typo here
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(101, 203, 107)",
          "rgb(201, 122, 107)",
          "rgb(66, 189, 187)",
          "rgb(201, 203, 207)",
          "rgb(91, 113, 67)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const barChartOptions = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Allow height adjustment
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#FFFFFF" },
        title: {
          display: true,
          text: "Months",
          color: "#6e3cd2",
          font: { size: 18, weight: "bold" },
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: "#FFFFFF",
          callback: function (value) {
            return value + "M"; // Add "M" to indicate millions
          },
        },
        title: {
          display: true,
          text: "Revenue (Million $)",
          color: "#6e3cd2",
          font: { size: 18, weight: "bold" },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#6e3cd2",
          font: { size: 20, weight: "bold" },
        },
      },
    },
  };

  return (
    <div className="flex w-full rounded-xl h-[40vh] md:h-[50vh] lg:h-[50vh] bg-[#282828] p-4 text-white">
      <Bar data={barChartData} options={barChartOptions} />
    </div>
  );
};

export default BarChart;
