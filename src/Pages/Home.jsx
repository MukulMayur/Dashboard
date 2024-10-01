import React, { useState } from "react";
import TopDisplay from "../Components/Home_Components/TopDisplay";
import Analytics from "../Components/Home_Components/Analytics";
import BarChart from "../Components/Charts/BarChart";
import { FaTruckLoading } from "react-icons/fa";
import { FiDownload, FiUpload } from "react-icons/fi";
import { FaHourglassHalf } from "react-icons/fa";
import Table from "../Components/Home_Components/Table";
import Data from "../Components/Home_Components/TableData";
import { MdOutlineSignalCellularNodata } from "react-icons/md";
import "../index.css";

function Home() {
  const [drivers, setDrivers] = useState(Data);
  const [searchDriver, setSearchDriver] = useState("");

  const handleSearch = (e) => {
    setSearchDriver(String(e.target.value));
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.includes(searchDriver)
  );

  return (
    <div className="flex flex-col">
      <div className="px-3 pt-3 md:p-0 lg:p-0">
        <Analytics />
      </div>
      <div className="flex flex-col md:flex lg:flex-row p-2 space-x-2">
        <TopDisplay />
      </div>
      <div className="flex px-3 gap-2 w-full bg-[#010409] mb-4 md:flex-row lg:flex-row flex-col">
        <div className="md:flex-[5] w-full rounded-xl md:p-2 lg:p-2 bg-[#282828] md:h-[92vh]">
          <BarChart />
          <h2 className="p-2 px-6 text-xl text-[#914cd6] font-bold pt-0 md:pb-2 lg:pb-2 overflow-y-auto ">
            Quarterly Shipping Data
          </h2>
          <div className="p-4 pt-0 md:p-4 lg:p-4  h-[28vh] md:h-[35vh] lg:h-[40vh] overflow-y-auto">
            <div className="border-[2px] border-gray-500 overflow-hidden rounded-md text-sm md:text-md lg:text-md md:mt-4">
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
        <div className="flex-[5] flex-col md:pl-2 lg:pl-2 space-y-4 w-full">
          <div className="flex-[2.5] rounded-xl p-4 px-4 h-[40vh] md:h-[45vh] lg:h-[45vh] bg-[#282828] text-white mt-2 md:mt-0 lg:mt-0">
            <h2 className="p-2 px-0 text-xl text-[#914cd6] font-bold pt-0 md:pb-2 lg:pb-2 overflow-y-auto">
              Vehicles Overview
            </h2>
            <div className="flex justify-between text-gray-400">
              <div className="flex items-center">
                <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#51ba51] mr-1"></span>
                <span className="text-gray-400">En Route</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#6a6fff]  mr-1"></span>
                <span className="text-gray-400">Unloading</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#03C3EB] mr-1"></span>
                <span className="text-gray-400">Loading</span>
              </div>
              <div className="flex items-center">
                <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#42525f] mr-1"></span>
                <span className="text-gray-400">Waiting</span>
              </div>
            </div>

            <div className="relative flex h-[3vh] w-full mt-4">
              <div className="bg-[#51ba51] w-[39.70%]"></div>
              <div className="bg-[#6a6fff] w-[28.30%]"></div>
              <div className="bg-[#03C3EB] w-[17.40%]"></div>
              <div className="bg-[#42525f] w-[14.80%]"></div>

              <div className="absolute inset-0 flex justify-between text-white text-xs sm:text-sm">
                <div className="w-[39.70%] flex justify-center items-center">
                  <span>39.70%</span>
                </div>
                <div className="w-[28.30%] flex justify-center items-center">
                  <span>28.30%</span>
                </div>
                <div className="w-[17.40%] flex justify-center items-center">
                  <span>17.40%</span>
                </div>
                <div className="w-[14.80%] flex justify-center items-center">
                  <span>14.80%</span>
                </div>
              </div>
            </div>
            <div className=" pt-0 md:p-4 lg:p-4 h-[28vh] md:h-[25vh] lg:h-[25vh] overflow-y-auto w-full mt-4">
              <div className="border-[2px] border-gray-500 overflow-hidden rounded-md text-sm md:text-md lg:text-md">
                <div className="flex text-white bg-transparent p-2 pl-6 justify-around border-b-[2px] border-gray-500">
                  <div className="flex-1 text-left flex gap-2 items-center">
                    <span className="text-[#51BA51]">
                      <FaTruckLoading size={16} />
                    </span>
                    <span>En Route</span>
                  </div>
                  <div className="flex-1 text-end">2hr 10min</div>
                  <div className="flex-1 text-center">39.70%</div>
                </div>
                <div className="bg-transparent text-white p-2 flex  pl-6 border-b-[2px] border-gray-500">
                  <div className="flex-1 text-left flex gap-2 items-center">
                    <span className="text-[#6A6FFF]">
                      <FiDownload size={16} />
                    </span>
                    <span>Unloading</span>
                  </div>
                  <div className="flex-1 text-end">3hr 15min</div>
                  <div className="flex-1 text-center">28.30%</div>
                </div>
                <div className="bg-transparent text-white p-2 flex pl-6 border-b-[2px] border-gray-500">
                  <div className="flex-1 text-left flex gap-2 items-center">
                    <span className="text-[#03C3EB]">
                      <FiUpload size={16} />
                    </span>
                    <span>Loading</span>
                  </div>
                  <div className="flex-1 text-end">1hr 24min</div>
                  <div className="flex-1 text-center">17.40%</div>
                </div>
                <div className="bg-transparent text-white p-2 flex pl-6 justify-between">
                  <div className="flex-1 text-left flex gap-2 items-center">
                    <span className="text-[#42525F]">
                      <FaHourglassHalf size={16} />
                    </span>
                    <span>Waiting</span>
                  </div>
                  <div className="flex-1 text-end">5hr 19min</div>
                  <div className="flex-1 text-center">14.80%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2.5] rounded-xl p-4 bg-[#282828]  h-[75vh] md:h-[45vh] overflow-y-auto elements">
            <div className="bg-[#282828] rounded-md h-[36vh] w-full">
              <div className="p-1  text-[#914cd6] justify-between font-bold pt-0  flex mb-2 md:flex-row lg:flex-row flex-col space-y-2 md:space-y-0 lg:space-y-0 ">
                <h2 className="text-xl">Driver Overview</h2>
                <input
                  type="text"
                  value={searchDriver}
                  onChange={handleSearch}
                  placeholder="Search Driver Information"
                  className="bg-indigo-200/40 font-medium text-gray-200 w-[100%] md:w-[50%] lg:w-[50%] placeholder-gray-200 focus:outline-0 px-4 py-1 rounded-lg focus:ring-2 focus:ring-gray-200 border-none"
                />
              </div>
              {filteredDrivers.length > 0 ? (
                (searchDriver === "" ? [drivers[0]] : filteredDrivers).map(
                  (driver) => (
                    <div
                      key={driver.id}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
                    >
                      {/* Driver Info */}
                      <div className="bg-[#007BFF] p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-[#ffffff]">
                          Driver Information
                        </h3>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>Name:</strong> {driver.name}
                        </p>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>License No:</strong> {driver.License_No}
                        </p>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>Phone:</strong> {driver.Phone}
                        </p>
                      </div>

                      {/* Vehicle Status */}
                      <div className="bg-[#FFB74D] p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-[#3e2723e3]">
                          Vehicle Information
                        </h3>
                        <p className="text-md md:text-lg text-[#3e2723e3]">
                          <strong>Vehicle: </strong> {driver.Vehicle_No}
                        </p>
                        <p className="text-md md:text-lg text-[#3e2723e3]">
                          <strong>Status: </strong> {driver.Status}
                        </p>
                        <p className="text-md md:text-lg text-[#3e2723e3]">
                          <strong>Last Checkpoint: </strong> NYC Depot
                        </p>
                      </div>

                      {/* Driver Performance */}
                      <div className="bg-[#7C7C7C] p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-[#FFFFFF]">
                          Performance
                        </h3>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>Trips Completed:</strong>{" "}
                          {driver.Trips_Completed}
                        </p>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>Current Trip:</strong> {driver.Current_Trip}
                        </p>
                        <p className="text-md md:text-lg text-[#FFFFFF]">
                          <strong>Feedback:</strong> {driver.Feedback}
                        </p>
                      </div>
                      <div>
                        <hr />
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="flex justify-center items-center w-full h-full text-2xl font-semibold text-gray-100 flex-col">
                  <div className="text-red-400">
                    <MdOutlineSignalCellularNodata size={100} />
                  </div>
                  <div className="text-red-400"> No driver data available.</div>
                </div>
              )}
              <div className="text-lg text-[#9147bc] hidden md:block lg:block text-justify mt-4">
                {" "}
                <span className="text-red-600 text-2xl">*</span> "This is the
                driver's information, connected with both the driver and vehicle
                details."
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <Table />
      </div>
    </div>
  );
}

export default Home;
