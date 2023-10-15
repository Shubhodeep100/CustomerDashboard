import React from "react";
import { BsJustifyLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import hand from "../Assets/hand.png";

const Greeting = ({ OpenSidebar }) => {
  return (
    <div className="pt-6 rounded-lg">
      <div className="flex flex-wrap justify-between mx-5">
        <div className="flex flex-row menu">
          <BsJustifyLeft
            className="text-2xl cursor-pointer text-black lg:hidden"
            onClick={OpenSidebar}
          />
          <span className="text-lg font-medium ml-3">Hello Shahrukh </span>
          <div className="w-5 h-5 mt-1">
            <img src={hand} alt="hand" />
          </div>
          ,
        </div>
        <div className="flex w-40 h-7 lg:mr-3 bg-white justify-start items-center rounded-md border-1 cursor-pointer search">
          <div className="p-1">
            <FiSearch className="text-slate-500" />
          </div>
          <div className="text-sm text-slate-300">Search</div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
