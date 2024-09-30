import React, { useState } from "react";
import {
  LuBox,
  LuMessageSquare,
  LuUser,
  LuCalendar,
  LuHelpCircle,
} from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import Logo from "/src/assets/Logo.png";
import { Link } from "react-router-dom";
import "../index.css";

function Slidebar() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLink = (index) => {
    setActiveLink(index);
  };

  const SLIDEBAR_LINKS = [
    { id: 1, path: "/Dashboard/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/Dashboard/members", name: "Members", icon: TbUsers },
    {
      id: 3,
      path: "/Dashboard/messages",
      name: "Message",
      icon: LuMessageSquare,
    },
    { id: 4, path: "/Dashboard/projects", name: "Projects", icon: PiSuitcase },
    { id: 5, path: "/Dashboard/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/Dashboard/works", name: "Work Plan", icon: LuCalendar },
  ];
  const HELP = [{ id: 7, path: "/help", name: "Help", icon: LuHelpCircle }];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 h-screen pt-4 px-4 bg-[#282828] z-10">
      <Link to={"/Dashboard/"}>
        <div className="mb-4 flex items-center justify-center md:justify-start md:gap-2 cursor-pointer">
          <img src={Logo} className="w-10  " alt="Logo" />
          <span className="font-bold text-[20px] sm:hidden hidden md:flex  text-white">
            Admin Master
          </span>
        </div>
      </Link>

      {/* Navigation */}
      <ul className="mt-2 space-y-1">
        {SLIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium px-4 py-2 hover:bg-gray-700 rounded-md text-gray-200 ${
              activeLink == index ? " text-indigo-500 bg-gray-600" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex items-center justify-center md:justify-start md:space-x-2"
              onClick={() => handleLink(index)}
            >
              <span className="text-xl">{React.createElement(link.icon)}</span>
              <span className="hidden md:flex text-md">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-full absolute left-0 px-4 bottom-5 py-1 cursor-pointers">
        <p className="font-medium px-4 py-2 hover:bg-gray-700 hover:text-gray-200 rounded-md">
          <Link
            to={HELP[0].path}
            className="flex items-center justify-center md:justify-start md:space-x-2 "
          >
            <span className="text-gray-200 text-xl">
              {React.createElement(HELP[0].icon)}
            </span>
            <span className="hidden md:flex text-gray-200 text-md">
              Need Help?
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Slidebar;
