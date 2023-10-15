import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import p1 from "../Assets/abstract1.jpg";
import p2 from "../Assets/abstract2.jpg";

const ProdTable = () => {
  return (
    <div className="mx-8 rounded-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-white rounded-t-lg prod">
        <div className="font-medium">Product Sell</div>
        <div className="flex flex-row">
          <div className="flex w-32 h-7 bg-slate-100 justify-start items-center rounded-md border-1 mx-2 cursor-pointer">
            <div className="p-1">
              <FiSearch className="text-slate-500" />
            </div>
            <div className="text-xs text-slate-400">Search</div>
          </div>

          <button className="flex flex-row bg-slate-100 px-2 py-1 rounded-md shadow-md text-xs text-slate-500 font-normal items-center">
            Last 30 days
            <FiChevronDown className="flex items-center ml-1 text-base text-gray-600" />
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="Tcha rounded-md">
        <thead>
          <tr>
            <th
              scope="col"
              className="w-2/3 text-xs font-normal text-slate-400"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="text-center text-xs font-normal text-slate-400"
            >
              Stock
            </th>
            <th
              scope="col"
              className="text-center text-xs font-normal text-slate-400"
            >
              Price
            </th>
            <th
              scope="col"
              className="text-center text-xs font-normal text-slate-400"
            >
              Total Sales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td data-label="Product Name" className="flex flex-row">
              <img src={p1} alt="new" className="w-14 h-10 rounded-md" />
              <span className="mx-3">
                <p className="text-sm font-semibold">Abstarct 3D</p>
                <p className="text-slate-400 text-xs font-normal">
                  This is the best wallpaper
                </p>
              </span>
            </td>
            <td data-label="Stock" className="text-sm text-center">
              32 in Stock
            </td>
            <td
              data-label="Price"
              className="text-sm font-semibold text-center"
            >
              $45.99
            </td>
            <td data-label="Total Sales" className="text-center">
              20
            </td>
          </tr>

          <tr className="border-t">
            <td data-label="Product Name" className="flex flex-row">
              <img src={p2} alt="new" className="w-14 h-10 rounded-md" />
              <span className="mx-3">
                <p className="text-sm font-semibold">Sarphens Illustration</p>
                <p className="text-slate-400 text-xs font-normal">
                  This is the best wallpaper
                </p>
              </span>
            </td>
            <td data-label="Stock" className="text-sm text-center">
              32 in Stock
            </td>
            <td
              data-label="Price"
              className="text-sm font-semibold text-center"
            >
              $45.99
            </td>
            <td data-label="Total Sales" className="text-center">
              20
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProdTable;