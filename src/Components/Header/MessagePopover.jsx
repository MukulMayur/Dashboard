import React, { useState } from "react";
import Message from "/src/assets/MessagePopOver.jpeg";

function MessagePopover() {
  const [useTab, setuseTab] = useState("messages");

  return (
    <div className="absolute right-0 mt-2 w-72 rounded-sm shadow-lg z-10 flex flex-col">
      <div
        className="w-72 md:h-[72px] lg:h-[82px] sm:h-[50px] rounded-t-sm relative flex flex-col items-center sm:p-1 md:p-2 lg:p-3 xl:p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${Message})` }}
      >
        <h5 className="lg:font-semibold sm:font-sm text-slate-900">
          Notifications
        </h5>
        <h6 className="lg:text-sm md:xs mt-1 text-slate-800">
          You have
          <b> 7</b> unread messages.
        </h6>
      </div>
      <div className="flex p-2 px-3 bg-white justify-between border border-b-gray-300">
        <button
          className="lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-800 rounded-sm hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("messages")}
        >
          Messages
        </button>
        <button
          className="lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-800 rounded-sm hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("events")}
        >
          Events
        </button>
        <button
          className="lg:p-1 lg:w-[80px] lg:text-sm md:text-xs text-gray-800 rounded-sm hover:bg-indigo-500 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] hover:text-white focus:bg-indigo-500 focus:shadow-gray-300 focus:text-white active:bg-indigo-400 active:shadow-lg active:text-white"
          onClick={() => setuseTab("errors")}
        >
          Errors
        </button>
      </div>
      <div>
        {useTab && (
          <div className="absolute p-2 bg-white  shadow-lg w-72 rounded-b-sm">
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
                <div className="text-center mt-3">
                  <button className="bg-black text-slate-200 p-1 text-xs rounded-full px-2 active:bg-gray-700">
                    View latest Changes
                  </button>
                </div>
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
                <div className="text-center mt-3">
                  <button className="bg-black text-slate-200 p-1 text-xs rounded-full px-2 active:bg-gray-700">
                    View latest Changes
                  </button>
                </div>
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
                <div className="text-center mt-3">
                  <button className="bg-black text-slate-200 p-1 text-xs rounded-full px-2 active:bg-gray-700">
                    View latest Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessagePopover;
