import React from "react";
import TopDisplay from "../Components/Home_Components/TopDisplay";
import Analytics from "../Components/Home_Components/Analytics";
import BarChart from "../Components/Charts/BarChart";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-3 pt-3 md:p-0 lg:p-0">
        <Analytics />
      </div>
      <div className="flex flex-col md:flex lg:flex-row p-2 space-x-2">
        <TopDisplay />
      </div>
      <div className="flex px-3 gap-2 w-full bg-[#010409] mb-4 md:flex-row lg:flex-row flex-col">
        <div className="md:flex-[5] w-full rounded-xl md:p-2 lg:p-2 bg-[#282828]">
          <BarChart />
          <h2 className="p-4 px-6 text-xl text-[#914cd6] font-bold pt-0 md:pb-2 lg:pb-2 overflow-y-auto">
            Quarterly Shipping Data
          </h2>
          <div className="p-4 pt-0 md:p-4 lg:p-4 h-[28vh] md:h-[35vh] lg:h-[35vh] overflow-y-auto">
            <div className="border-[2px] border-gray-500 overflow-hidden rounded-md text-sm md:text-md lg:text-md">
              <div className="flex text-white font-semibold bg-transparent p-2  justify-between border-b-[2px] border-gray-500">
                <div className="flex-1 text-center">Quater</div>
                <div className="flex-1 text-center">Shipments</div>
                <div className="flex-1 text-center">Days</div>
                <div className="flex-1 text-center">Costs($)</div>
              </div>
              <div className="bg-transparent text-white p-2 flex justify-between border-b-[2px] border-gray-500">
                <div className="flex-1 text-center">1st Quater</div>
                <div className="flex-1 text-center">120</div>
                <div className="flex-1 text-center">5</div>
                <div className="flex-1 text-center">$ 15,000</div>
              </div>
              <div className="bg-transparent text-white p-2 flex justify-between border-b-[2px] border-gray-500">
                <div className="flex-1 text-center">2nd Quater</div>
                <div className="flex-1 text-center">130</div>
                <div className="flex-1 text-center">4</div>
                <div className="flex-1 text-center">$ 18,000</div>
              </div>
              <div className="bg-transparent text-white p-2 flex justify-between border-b-[2px] border-gray-500">
                <div className="flex-1 text-center">3rd Quater</div>
                <div className="flex-1 text-center">150</div>
                <div className="flex-1 text-center">3</div>
                <div className="flex-1 text-center">$ 20,000</div>
              </div>
              <div className="bg-transparent text-white p-2 flex justify-between">
                <div className="flex-1 text-center">4th Quater</div>
                <div className="flex-1 text-center">140</div>
                <div className="flex-1 text-center">4</div>
                <div className="flex-1 text-center">$ 19,000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2.5] rounded-xl p-4 bg-[#282828]">Chart1</div>
        <div className="flex-[2.5] rounded-xl p-4 bg-[#282828]">Chart1</div>
      </div>
    </div>
  );
}

export default Home;
