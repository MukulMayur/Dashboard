import Tooltip from "../../Tooltip";
import React, { useEffect, useRef, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa6";

function Analytics() {
  const [isButtonPop, setButtonPop] = useState(false);
  const popButton = useRef(null);

  useEffect(() => {
    const handleButton = (event) => {
      if (popButton.current && !popButton.current.contains(event.target)) {
        setButtonPop(false);
      }
    };
    document.addEventListener("mousedown", handleButton);
    return () => removeEventListener("mousedown", handleButton);
  }, []);

  return (
    <div className="flex md:flex-row flex-col md:space-x-6 lg:space-x-6 items-center bg-[#282828] shadow-sm p-2 px-4 py-4 gap-y-4 rounded-xl md:rounded-none lg:rounded-none">
      <div className="text-indigo-500 w-[5%] bg-white p-4 shadow-lg md:flex lg:flex items-center justify-center rounded-lg hidden">
        <RxDashboard size={32} />
      </div>
      <div className="md:w-[78%] lg:w-[78%] w-full">
        <p className="text-white font-semibold text-xl">Analytics Dashboard</p>
        <p className="text-gray-300 w-full text-fit hidden md:block lg:block">
          This is an example dashboard created using build-in elements and
          components.
        </p>
        <p className="text-gray-300 w-full text-fit block md:hidden lg:hidden">
          An interactive dashboard for key metrics.
        </p>
      </div>
      <div className="flex content-end space-x-4 w-full md:w-[17%] lg:w-[17%]">
        <Tooltip text={"Sample Records"}>
          <button className="bg-gray-700 text-white p-2 rounded-sm active:bg-gray-900">
            <FaStar />
          </button>
        </Tooltip>
        <div className="relative" ref={popButton}>
          <div
            className="p-1 rounded-sm text-white bg-gradient-to-bl from-[#83d2ff] to-[#17aaff] active:from-[#0098EF] active:to-[#0098EF] hover:from-[#0097efce] hover:to-[#0097efce] flex items-center gap-1 cursor-pointer shadow-indigo-300 shadow-md active:shadow-none"
            onClick={() => setButtonPop(!isButtonPop)}
          >
            <FaToolbox className="px-1" size={24} />
            <div>Buttons</div>
            <RiArrowDropDownLine size={24} />
            {isButtonPop && (
              <div className="absolute top-12 md:-left-32 lg:-left-32 -left-16 w-60 border bg-[#282828] p-4 z-10 rounded-md space-y-3">
                <div className="flex justify-center items-center space-x-2">
                  <MdOutlineForwardToInbox
                    size={25}
                    className="w-[20%] text-indigo-400 hover:text-indigo-500 active:text-indigo-600"
                  />
                  <div className="w-[70%] text-white font-semibold">Inbox</div>
                  <div className="bg-red-600 p-1 rounded-md">
                    <div className="text-sm font-semibold lg:w-6 text-center">
                      48
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <FaRegBookmark
                    size={25}
                    className="w-[20%] text-indigo-400 hover:text-indigo-500 active:text-indigo-600"
                  />
                  <div className="w-[70%] text-white font-semibold">
                    Book Marks
                  </div>
                  <div className="bg-green-400 p-1 rounded-md">
                    <div className="text-sm font-semibold w-5 lg:w-6 text-center">
                      5
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <FaRegImage
                    size={22}
                    className="w-[20%] text-indigo-400 hover:text-indigo-500 active:text-indigo-600"
                  />
                  <div className="w-[70%] text-white font-semibold">
                    Pictures
                  </div>
                  <div className="bg-[#282828] p-1 rounded-md">
                    <div className="text-sm font-semibold lg:w-6 text-center"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <FaRegFile size={25} className="w-[20%] text-gray-500" />
                  <div className="w-[70%] text-white font-semibold">
                    Disable File
                  </div>
                  <div className="bg-[#282828] p-1 rounded-md">
                    <div className="text-sm font-semibold lg:w-6 text-center"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
