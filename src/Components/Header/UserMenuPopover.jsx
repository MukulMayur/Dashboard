import React from "react";
import UserBg from "/src/assets/UserBg.jpg";
import { IoTicketOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

function UserMenuPopover() {
  return (
    <div className="absolute right-0 mt-2 w-72 rounded-sm shadow-lg z-10 flex flex-col text-white">
      <div
        className="w-72 md:h-[72px] lg:h-[82px] sm:h-[50px] rounded-t-sm relative flex items-center sm:p-1 md:p-2 lg:p-3 xl:p-4 bg-cover bg-center justify-between"
        style={{ backgroundImage: `url(${UserBg})` }}
      >
        <img
          src="http://randomuser.me/api/portraits/men/51.jpg"
          alt="M"
          className="w-10 h-10 rounded-full border-2"
        />
        <div className="flex flex-col">
          <div className="text-sm text-[#ffffffe7]">
            <span className="font-semibold">Maddy Sen</span>
          </div>
          <div className="text-xs">A short profile description.</div>
        </div>
        <button className="p-2 bg-gray-700 active:bg-gray-600 hover:bg-gray-800 text-[#feffff] text-xs px-2 rounded-full font-semibold">
          Logout
        </button>
      </div>
      <div className="flex flex-col p-4 px-3 bg-white text-gray-700 justify-between ">
        <div className="p-1 text-sm font-semibold">Activity</div>

        <div className="flex items-center justify-between p-1 text-xs font-semibold text-indigo-600">
          <a href="#">Chats</a>
          <div className="flex items-center justify-center h-6 w-6 bg-red-500 text-white rounded-lg">
            <span>21</span>
          </div>
        </div>

        <div className="p-1 text-xs font-semibold text-indigo-600 cursor-pointer">
          Recover Password
        </div>

        <div className="p-1 text-sm font-semibold text-gray-700">
          MY ACCOUNT
        </div>
        <hr />
        <div className="text-center mt-3 flex space-x-2 items-center justify-around">
          <div className="flex flex-col border items-center border-gray-200 rounded-lg p-2 hover:text-white hover:bg-[#F7B924] active:bg-[#f7b824dc]">
            <div>
              <AiOutlineMessage className="text-2xl hover:text-white" />
            </div>
            <div className="hover:text-white p-1 text-xs font-semibold  px-2">
              Message Inbox
            </div>
          </div>
          <div className="flex flex-col border items-center border-gray-200 rounded-lg p-2 hover:text-white hover:bg-[#D92550] active:bg-[#d9254fe6]">
            <div>
              <IoTicketOutline className="text-2xl hover:text-white" />
            </div>
            <div className="hover:text-white p-1 text-xs font-semibold  px-2">
              Support Ticket
            </div>
          </div>
        </div>
        <hr className="mt-2" />
      </div>

      <div className="text-center rounded-b-sm bg-white">
        <button className="mb-2 bg-black text-slate-200 p-1 text-xs rounded-full px-2 active:bg-gray-700">
          View latest Changes
        </button>
      </div>
    </div>
  );
}

export default UserMenuPopover;
