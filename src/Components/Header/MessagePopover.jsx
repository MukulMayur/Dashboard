import React, { useState } from "react";
import Message from "/src/assets/MessagePopOver.jpeg";

function MessagePopover() {
  const [useTab, setuseTab] = useState("messages");

  return (
    <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg z-10 flex flex-col border border-white">
      <div
        className="w-full md:h-[72px] lg:h-[82px] h-[60px] rounded-t-md relative flex flex-col items-center sm:p-1 md:p-2 lg:p-3 xl:p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Message})` }}
      >
        <h5 className="lg:font-semibold sm:font-sm text-red-600">
          Notifications
        </h5>
        <h6 className="lg:text-sm md:xs mt-1 text-slate-700">
          You have
          <b> 7</b> unread messages.
        </h6>
      </div>
      <div className="flex p-2 px-3 bg-[#282828] justify-between rounded-none">
        <button
          className="px-1.5 lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-700 rounded-sm bg-white  hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("messages")}
        >
          Messages
        </button>
        <button
          className="px-2 lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-700 rounded-sm bg-white hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("events")}
        >
          Events
        </button>
        <button
          className="px-2 lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-700 rounded-sm bg-white hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("errors")}
        >
          Errors
        </button>
      </div>
      <div>
        {useTab && (
          <div className="absolute p-2 bg-[#282828] shadow-lg w-full">
            {useTab === "messages" && (
              <div className="p-2 h-[170px] flex flex-col ">
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.6rem] flex justify-center"></div>
                    <div className="bg-red-600 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className=" text-slate-500">All Hands Meeting</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-yellow-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className="pb-1 text-slate-500">
                      Yet another one at ,{" "}
                      <span className="text-green-400">15:00 PM</span>
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-green-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <div className="pb-1 text-slate-500">
                      Build the production release
                    </div>
                    <div className=" ml-2">
                      <span className="text-white text-[11px] w-4 px-3 bg-red-600 py-[3px] shadow-lg cursor-pointer rounded-sm active:bg-red-500">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-blue-500 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className="pb-1 text-slate-500">
                      Sometime not important !
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            )}
            {useTab === "events" && (
              <div className="p-2 h-[170px] flex flex-col ">
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.6rem] flex justify-center"></div>
                    <div className="bg-red-600 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[1.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex flex-col lg:text-[12px] mt-[0.4rem] space-y-1-1">
                    <span className=" text-slate-500">All Hands Meeting</span>
                    <span className=" text-slate-500">All Hands Meeting</span>
                  </div>
                </div>
                <div className="flex space-x-3 py-2">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.6rem] flex justify-center"></div>
                    <div className="bg-yellow-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className="pb-1 text-slate-500">
                      Yet another one at ,{" "}
                      <span className="text-green-400">15:00 PM</span>
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-green-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <div className="pb-1 text-slate-500">
                      Build the production release
                    </div>
                    <div className=" ml-2">
                      <span className="text-white text-[11px] w-4 px-3 bg-red-600 py-[3px] shadow-lg cursor-pointer rounded-sm active:bg-red-500">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            )}
            {useTab === "errors" && (
              <div className="p-2 h-[170px] flex flex-col ">
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.6rem] flex justify-center"></div>
                    <div className="bg-red-600 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className=" text-slate-500">All Hands Meeting</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-yellow-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className="pb-1 text-slate-500">
                      Yet another one at ,{" "}
                      <span className="text-green-400">15:00 PM</span>
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-green-400 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <div className="pb-1 text-slate-500">
                      Build the production release
                    </div>
                    <div className=" ml-2">
                      <span className="text-white text-[11px] w-4 px-3 bg-red-600 py-[3px] shadow-lg cursor-pointer rounded-sm active:bg-red-500">
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex justify-start flex-col items-center">
                    <div className="bg-gray-300 w-[0.3rem] h-[0.3rem] flex justify-center"></div>
                    <div className="bg-blue-500 w-[1rem] h-[1rem] rounded-full flex items-center justify-center">
                      <div className="rounded-full bg-white h-[0.5rem] w-[0.5rem]"></div>
                    </div>
                    <div className="bg-gray-300 w-[0.3rem] h-[0.5rem] flex justify-center"></div>
                  </div>
                  <div className="items-center flex lg:text-[12px]">
                    <span className="pb-1 text-slate-500">
                      Sometime not important !
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagePopover;
