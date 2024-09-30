import React from "react";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";

function TopDisplay1() {
  const CHART_INFO = [
    {
      id: 1,
      name: "Total Images",
      GB: "26,435 GB",
      Percentage: "+32.40%",
      Circle_Percentage: "32%",
      month: "last month",
      icon: IoIosTrendingUp,
      color: "green-500",
    },
    {
      id: 2,
      name: "Total Videos",
      GB: "54,439 GB",
      Percentage: "-18.45%",
      Circle_Percentage: "48%",
      month: "last month",
      icon: IoIosTrendingDown,
      color: "red-500",
    },
    {
      id: 3,
      name: "Total Documents",
      GB: "91,825 GB",
      Percentage: "+20.40%",
      Circle_Percentage: "88%",
      month: "last month",
      icon: IoIosTrendingUp,
      color: "green-500",
    },
    {
      id: 4,
      name: "Total Music",
      GB: "63,935 GB",
      Percentage: "+15.40%",
      Circle_Percentage: "54%",
      month: "last month",
      icon: IoIosTrendingDown,
      color: "red-500",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col w-full md:space-x-2 space-y-2 md:space-y-0 bg-[#010409] px-1 py-2">
      {CHART_INFO.map((item) => (
        <div className="flex bg-[#282828] px-3 text-gray-700 w-full rounded-xl h-full  md:h-[100px] lg:h-[120px] items-center justify-around shadow-md">
          <div className="flex flex-col items-center">
            <div className="justify-start w-full">
              <p className="text-white text-md md:text-[15px] lg:text-[18px]">
                {item.name}
              </p>
            </div>
            <div className="flex justify-start text-lg md:text-lg lg:text-xl w-full text-white">
              <strong>{item.GB}</strong>
            </div>
            <div className="flex items-center space-x-1 w-full">
              <div
                className={`${
                  item.color === "green-500" ? "text-green-300" : "text-red-500"
                } text-md md:text-xl lg:text-lg`}
              >
                {<item.icon />}
              </div>
              <div
                className={`${
                  item.color === "green-500" ? "text-green-300" : "text-red-600"
                } text-[15px] md:text-[14px] lg:text-[14px]`}
              >
                {item.Percentage}
              </div>
              <div className=" text-white text-[16px] md:text-[13px] lg:text-[14px]">
                {item.month}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[90px]  md:h-[85px] lg:h-[90px] w-[90px]  md:w-[85px] lg:w-[90px]">
            <div className="relative w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[5rem] lg:h-[5rem] flex justify-center items-center">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${
                    item.color === "green-500"
                      ? `#34A853 0% ${item.Circle_Percentage}, #d1fae5 ${item.Circle_Percentage} 100%`
                      : `#EF4444 0% ${item.Circle_Percentage}, #fee2e2 ${item.Circle_Percentage} 100%`
                  })`,
                }}
              >
                <div className="absolute inset-1.5 rounded-full bg-[#282828] flex justify-center items-center">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[white]">
                    {item.Circle_Percentage}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopDisplay1;
