import React from "react";
const Customers = () => {
  return (
    <div className="flex flex-col w-[325px] h-72 bg-white rounded-lg cha cust relative">
      <div className="flex flex-col py-3 justify-start px-6">
        <span className="text-sm font-bold">Customers</span>
        <span className="text-xs text-gray-400 ">
          Customers that buy products
        </span>
      </div>
      {/* <div className="relative"> */}
        <div className="concentric-ring s">
          <div className="outer s"></div>
          <div className="inner s"></div>
          <div className="hello s"></div>
          <div className="circle s">
            <div className="inner2 s">
              <p className="flex justify-center items-center font-serif font-extrabold number">
                65%
              </p>
              <span className="flex justify-center text-center tracking-tighter sp">
                Total New
              </span>
              <span className="flex justify-center text-center tracking-tighter sc">
                Customers
              </span>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Customers;
