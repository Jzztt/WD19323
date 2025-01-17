import React from "react";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <header>
        <div className="flex justify-between px-4 py-4 bg-gray-200">
          <div className="flex items-center gap-2">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
            />
            <p className="font-semibold">FlowBite</p>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-3">
              <li className="text-blue-700">Home</li>
              <li className="hover:text-blue-700">Product</li>
              <li className="hover:text-blue-700">About</li>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-1 text-white bg-blue-700 rounded hover:bg-blue-800">Login</button>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ClientLayout;
