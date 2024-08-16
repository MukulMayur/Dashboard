import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

function TopDisplay3() {
  return (
    <div className="flex bg-white px-4 sm:px-3 text-gray-700 w-full md:w-[250px] lg:w-full xl:w-full 2xl:w-full rounded-xl h-[120px] sm:h-[100px] md:h-[110px] lg:h-[120px] xl:h-[130px] 2xl:h-[140px] items-center justify-around shadow-md">
      <div className="flex flex-col items-center ">
        <div className="justify-start w-full">
          <p className="text-gray-500 text-xs sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
            Total Documents
          </p>
        </div>
        <div className="flex justify-start text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl w-full">
          <strong>91,825 GB</strong>
        </div>
        <div className="flex items-center space-x-1 w-full">
          <div className="text-green-500 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl">
            <IoIosTrendingUp />
          </div>
          <div className="text-green-500 text-xs sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]">
            +20.40%
          </div>
          <div className=" text-gray-500 text-xs sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            last month
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[90px] sm:h-[80px] md:h-[85px] lg:h-[90px] xl:h-[100px] 2xl:h-[110px] w-[90px] sm:w-[80px] md:w-[85px] lg:w-[90px] xl:w-[100px] 2xl:w-[110px]">
        <div className="relative w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem] 2xl:w-[7rem] 2xl:h-[7rem] flex justify-center items-center">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(#EF4444_0%_88%,#000000_88%_100%)]">
            <div className="absolute inset-1.5 rounded-full bg-white flex justify-center items-center">
              <h2 className="text-sm sm:text-xs md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-600">
                88%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDisplay3;
