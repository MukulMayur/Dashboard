import React, { useEffect, useRef, useState } from "react";
import { GoBell } from "react-icons/go";
import MessagePopover from "./MessagePopover";
import UserMenuPopover from "./UserMenuPopover";
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { RxDropdownMenu } from "react-icons/rx";
import Tooltip from "../../Tooltip";

function Header() {
  const [isSwinging, setIsSwinging] = useState(true);
  const [isPopOverOpen, setPopOverOpen] = useState(false);
  const [isUserPopOver, setUserPopOver] = useState(false);
  const [issearch, setSearch] = useState(false);
  const popUserRef = useRef(null);
  const popoverRef = useRef(null);

  const handlesearchclick = () => {
    setSearch(!issearch);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopOverOpen(false);
      }
      if (popUserRef.current && !popUserRef.current.contains(event.target)) {
        setUserPopOver(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-3 lg:h-14 sm:h-10 md:h-12 bg-white shadow-md">
      <div className="flex items-center justify-between space-x-4">
        {!issearch && (
          <Tooltip text="Search">
            <div
              className="text-white cursor-pointer p-1 ml-2 rounded-full transition-transform transform hover:scale-110 items-center"
              onClick={handlesearchclick}
            >
              <IoSearchSharp size={24} className="text-gray-700" />
            </div>
          </Tooltip>
        )}
        <div className="absolute">
          {issearch && (
            <div className="hidden md:flex items-center transition-transform transform scale-0 origin-right animate-search-pop">
              <input
                type="text"
                placeholder="Search"
                className="bg-indigo-200/20 text-gray-600 placeholder-gray-700 focus:outline-0 px-4 py-1 rounded-lg focus:ring-2 focus:ring-indigo-500 border-none transition-transform transform scale-0 animate-input-pop"
              />
              <Tooltip text="Close">
                <IoClose
                  size={24}
                  className="text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => handlesearchclick(!issearch)}
                />
              </Tooltip>
            </div>
          )}
        </div>

        {!issearch && (
          <div>
            <div className="flex items-center space-x-5">
              <Tooltip text="Setting">
                <div className="flex items-center gap-1 text-gray-700 cursor-pointer animate-spin-slow transition-transform transform hover:scale-110">
                  <FiSettings size={24} />
                </div>
              </Tooltip>
              <Tooltip text="Language">
                <div className="flex items-center gap-1 text-gray-700 cursor-pointer transition-transform transform hover:scale-110">
                  <GrLanguage size={24} />
                </div>
              </Tooltip>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-5">
          <div className="flex space-x-5">
            <div>
              <Tooltip text="Projects">
                <GoProjectSymlink
                  size={24}
                  className="text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip text="Grid Dashboard">
                <CgMenuGridO
                  size={24}
                  className="text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip text="Mega Menu">
                <RxDropdownMenu
                  size={24}
                  className="text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
                />
              </Tooltip>
            </div>
          </div>

          <div className="relative" ref={popoverRef}>
            <button
              className={`flex  text-gray-700 relative ${
                isSwinging ? "animate-swing" : ""
              }`}
              onClick={() => {
                setPopOverOpen(!isPopOverOpen);
                setIsSwinging(!isSwinging); // Toggle the swinging animation
              }}
            >
              <Tooltip text="Notification">
                <GoBell size={24} />
              </Tooltip>
              <span className="absolute text-white rounded-full bg-indigo-600 border-2 border-white text-[10px] flex justify-center items-center -mt-1 -mr-1 top-0 right-0 font-semibold w-5 h-4">
                7
              </span>
            </button>
            {isPopOverOpen && <MessagePopover />}
          </div>

          <div className="relative cursor-pointer" ref={popUserRef}>
            <Tooltip text="User">
              <img
                src="http://randomuser.me/api/portraits/men/51.jpg"
                alt="M"
                className="w-8 h-8 rounded-full border-2"
                onClick={() => setUserPopOver(!isUserPopOver)}
              />
            </Tooltip>
            {isUserPopOver && <UserMenuPopover />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
