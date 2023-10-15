import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { LuUserSquare2 } from "react-icons/lu";
import { GiWallet } from "react-icons/gi";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";
import { TbSquareKey } from "react-icons/tb";
import { FiChevronRight } from "react-icons/fi";
import { LuChevronLeftCircle } from "react-icons/lu";
import pic from "../Assets/1.jpg";

function Leftside({ openSidebarToggle, OpenSidebar }) {
  return (
    <div id="sidebar" className={openSidebarToggle ? "responsive" : ""}>
      <div className="relative px-2 pt-4 pr-3 bg-indigo-950 h-full LeftSidebar ">
        <div className="absolute top-7 right-3">
          <LuChevronLeftCircle
            className="text-2xl lg:hidden cursor-pointer text-white"
            onClick={OpenSidebar}
          />
        </div>

        <div className="ml-3 flex justify-between items-center mt-2 tracking-tight">
          <a href=" " className="flex items-center">
            <RiSettingsLine className="text-2xl text-white" />
            <span className="pl-1 text-xl font-semibold whitespace-nowrap text-white">
              Dashboard
            </span>
          </a>
        </div>

        {/* The links component block starts */}
        <div className="ml-2 h-screen pt-7 bg-indigo-950 overflow-y-auto sm:w-44">
          <ul className="space-y-2 text-xs">
            <li>
              <a href=" " className="anchor-cont">
                <TbSquareKey className="text-base" />
                <span className="anchor-txt">Dashboard</span>
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont group">
                <AiFillCodeSandboxSquare className="text-base rounded-sm" />
                <span className="anchor-txt ">Product</span>
                <FiChevronRight className="group-hover:rotate-90 duration-500" />
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont group">
                <LuUserSquare2 className="text-base" />
                <span className="anchor-txt">Customers</span>
                <FiChevronRight className="group-hover:rotate-90 duration-300" />
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont group">
                <GiWallet className="text-base" />
                <span className="anchor-txt">Income</span>
                <FiChevronRight className="group-hover:rotate-90 duration-300" />
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont group">
                <LuBadgePercent className="text-base" />
                <span className="anchor-txt">Promote</span>
                <FiChevronRight className="group-hover:rotate-90 duration-300" />
              </a>
            </li>
            <li>
              <a href=" " className="anchor-cont group">
                <MdOutlineLiveHelp className="text-base" />
                <span className="anchor-txt">Help</span>
                <FiChevronRight className="group-hover:rotate-90 duration-300" />
              </a>
            </li>
          </ul>

          <div className="flex flex-row fixed bottom-6 anchor-cont group space-x-2">
            <div className="w-8 h-8 rounded-full">
              <img
                src={pic}
                alt="Displaypic"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-white font-medium text-sm">Evano</p>
                <span className="font-light text-white text-xs">
                  Project Manager
                </span>
              </div>
            </div>
            <FiChevronRight className="group-hover:rotate-90 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
