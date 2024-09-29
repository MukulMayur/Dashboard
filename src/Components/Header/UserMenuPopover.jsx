import React from "react";
import UserBg from "/src/assets/UserBg.jpg";
import { IoTicketOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

function UserMenuPopover() {
  return (
    <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg z-10 flex flex-col text-white border-white border">
      <div
        className="w-full md:h-[92px] lg:h-[92px] h-[70px] rounded-t-md relative flex items-center p-2 md:p-2 lg:p-3 xl:p-4 bg-cover bg-center justify-between"
        style={{ backgroundImage: `url(${UserBg})` }}
      >
        <img
          src="http://randomuser.me/api/portraits/men/51.jpg"
          alt="M"
          className="w-10 h-10 rounded-full border-2"
        />
        <div className="flex flex-col">
          <div className="text-sm text-[#ffffffe7]">
            <span className="font-semibold">Mukul Mayur</span>
          </div>
          <div className="text-xs">A short profile description.</div>
        </div>
        <button className="p-2 bg-gray-700 active:bg-gray-600 hover:bg-gray-800 text-[#feffff] text-xs px-2 rounded-full font-semibold">
          Logout
        </button>
      </div>
      <div className="flex flex-col p-4 px-3 bg-[#282828] text-white justify-between rounded-b-md">
        <div className="p-1 text-sm font-semibold">Activity</div>

        <div className="flex items-center justify-between p-1 text-sm font-semibold text-indigo-400">
          <a href="#">Chats</a>
          <div className="flex items-center justify-center h-6 w-6 bg-red-500 text-white rounded-lg">
            <span>21</span>
          </div>
        </div>

        <div className="p-1 text-sm font-semibold text-indigo-400 cursor-pointer">
          Recover Password
        </div>

        <div className="p-1 text-sm font-semibold text-white">MY ACCOUNT</div>
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
    </div>
  );
}

export default UserMenuPopover;
