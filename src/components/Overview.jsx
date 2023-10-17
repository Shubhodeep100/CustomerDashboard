import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FiChevronDown } from "react-icons/fi";

function Overview() {
  const [state, setState] = useState({
    series: [
      {
        data: [
          { x: "Jan", y: 72 },
          { x: "Feb", y: 55 },
          { x: "Mar", y: 100 },
          { x: "Apr", y: 78 },
          { x: "May", y: 85 },
          { x: "Jun", y: 38 },
          { x: "Jul", y: 78 },
          { x: "Aug", y: 100, fillColor: "#3616E4", strokeColor: "#C23829" },
          { x: "Sep", y: 94 },
          { x: "Oct", y: 78 },
          { x: "Nov", y: 70 },
          { x: "Dec", y: 79 },
        ],
        colors: ["#3F40D9"],
      },
    ],
    isDropdownOpen: false,
  });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  return (
    <div className="flex bg-white rounded-xl cha">
      <div className="flex rounded-xl border">
        {/* Overview block starts */}
        <div className="flex flex-col md:min-w-[810px] mwi cha">
          <div className="flex justify-between items-center pt-3 pl-5 pr-3">
            <div className="flex flex-col font-bold text-md">
              Overview
              <span className="text-xs font-light text-gray-500">
                Monthly earning
              </span>
            </div>
            <div className="flex flex-row">
              <button
                className="flex flex-row bg-slate-100 px-2 py-1 rounded-md shadow-md text-xs font-normal items-center"
                onClick={toggleDropdown}
              >
                Quarterly
                <FiChevronDown className="flex items-center ml-1 text-base text-gray-600" />
              </button>
              {state.isDropdownOpen && (
                <div className="absolute mt-6 bg-white border border-gray-300 rounded-lg shadow-md w-20 flex flex-col items-center z-50 cursor-pointer pl-2">
                  <ul className="max-h-20 overflow-y-auto text-xs pr-2">
                    <li className="hover:bg-slate-300">Jan</li>
                    <li className="hover:bg-slate-300">Feb</li>
                    <li className="hover:bg-slate-300">Mar</li>
                    <li className="hover:bg-slate-300">Apr</li>
                    <li className="hover:bg-slate-300">May</li>
                    <li className="hover:bg-slate-300">Jun</li>
                    <li className="hover:bg-slate-300">Jul</li>
                    <li className="hover:bg-slate-300">Aug</li>
                    <li className="hover:bg-slate-300">Sep</li>
                    <li className="hover:bg-slate-300">Oct</li>
                    <li className="hover:bg-slate-300">Nov</li>
                    <li className="hover:bg-slate-300">Dec</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Chart
            options={{
              dataLabels: {
                position: "start",
                style: {
                  colors: ["#4207B0"],
                  fontSize: 0.1,
                },
              },

              plotOptions: {
                bar: {
                  borderRadius: 10,
                },
              },

              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
                labels: {
                  show: false,
                },
              },
              grid: {
                show: false,
              },
              colors: ["#DCDCDC"],
              theme: { mode: "light" },
            }}
            series={state.series}
            type="bar"
            height="280"
          />
        </div>
      </div>
    </div>
  );
}

export default Overview;
