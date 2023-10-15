import React from 'react'

import dollar from '../Assets/dollar.png'
import list from '../Assets/list.png'
import wallet from '../Assets/wallet.png' 
import bag from '../Assets/shop.png'

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-between gap-9 mx-8 py-2 mid">
      {/* Card One - Earning */}
      <div className="flex flex-row bg-white items-center rounded-lg pr-5">
        <div className="py-4 px-2">
          <div className="w-15 h-15 rounded-full">
            <img
              src={dollar}
              alt="Display pic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 font-light text-xs">Earning</p>
          <div className="flex flex-col justify-items-start items-start">
            <span className="text-black mr-2 font-semibold text-lg">$198K</span>
          </div>
          <span className="font-light text-black text-xs">
            <span className=" text-green-500 font-bold">🡑37.8% </span>
            this month
          </span>
        </div>
      </div>
      {/* Card two - orders */}
      <div className="flex flex-row bg-white items-center rounded-lg pr-6">
        <div className="py-4 px-2 c2">
          <div className="w-15 h-15 rounded-full ">
            <img
              src={list}
              alt="Display pic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 font-light text-xs">Orders</p>
          <div className="flex flex-col justify-items-start items-start">
            <span className="text-black mr-2 font-semibold text-lg">$2.4K</span>
          </div>
          <span className="font-light text-black text-xs">
            <span className=" text-red-600 font-bold">🡓2% </span>
            this month
          </span>
        </div>
      </div>
      {/* Card 3 wallet*/}
      <div className="flex flex-row bg-white items-center rounded-lg pr-6">
        <div className="py-4 px-2">
          <div className="w-15 h-15 rounded-full ">
            <img
              src={wallet}
              alt="Display pic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 font-light text-xs">Total Sales</p>
          <div className="flex flex-col justify-items-start items-start">
            <span className="text-black mr-2 font-semibold text-lg">$2.4K</span>
          </div>
          <span className="font-light text-black text-xs">
            <span className=" text-red-600 font-bold">🡓2% </span>
            this month
          </span>
        </div>
      </div>

      {/* Card 4*/}
      <div className="flex flex-row bg-white items-center rounded-lg pr-6">
        <div className="py-4 px-2">
          <div className="w-15 h-15 rounded-full ">
            <img
              src={bag}
              alt="Display pic"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 font-light text-xs">Total Sales</p>
          <div className="flex flex-col justify-items-start items-start">
            <span className="text-black mr-2 font-semibold text-lg">$198K</span>
          </div>
          <span className="font-light text-black text-xs">
            <span className=" text-green-500 font-bold">🡑11% </span>
            this month
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards