import React from "react";
import chart from '../Assets/chart.png'

const Customers = () => {
  return (
    <div className="flex flex-col w-[325px] h-72 bg-white rounded-lg cha cust">
      <div className="flex flex-col py-3 justify-start px-6">
        <span className="text-sm font-bold">Customers</span>
        <span className="text-xs text-gray-400">
          Customers that buy products
        </span>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-32 h-32 relative flex justify-center items-center">
          <img
            src={chart}
            alt="Display pic"
            className="w-full h-full rounded-full"
          />
          <div className="absolute w-16 h-16 bg-white rounded-full">
            <div className="flex flex-col justify-center items-center p-2">
              <p
                className="text-black text-center text-lg font-bold"
                style={{ margin: "3", lineHeight: "1" }}
              >
                65%
              </p>
              <p
                className="text-black text-center font-normal text-xs"
                style={{ fontSize: "14px", margin: "0" }}
              >
                Total New Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
