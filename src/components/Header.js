import React from "react";
import ram from "../images/cyberdeck-ram.svg";

function Header({headerData}) {
  return (
    <div>
      <div className=" w-3/12 mx-auto">
        <h2 className="uppercase text-secondary-500 font-black text-5xl text-shadow-secondary">
          {headerData}
        </h2>
        <div className="border-b-4 border-t-2 h-2 border-solid border-opacity-40 border-red-700 mt-2 mb-4"></div>
        <h4 className="text-left text-xs font-extrabold text-secondary-600 text-shadow-secondary">
          IT CAN BE ANYTHING
        </h4>
        <div className="flex justify-start mt-2">
          <img
            className="w-3 mr-2 transform scale-100 hover:scale-125 cursor-pointer transition easy-in active-hack-item-svg"
            src={ram}
            alt="CYBERDECK RAMS"
          />
          <img
            className="w-3 mr-2 transform scale-100 hover:scale-125 cursor-pointer transition easy-in active-hack-item-svg"
            src={ram}
            alt="CYBERDECK RAMS"
          />
          <img
            className="w-3 mr-2 transform scale-100 hover:scale-125 cursor-pointer transition easy-in active-hack-item-svg"
            src={ram}
            alt="CYBERDECK RAMS"
          />
          <img
            className="w-3 mr-2 transform scale-100 hover:scale-125 cursor-pointer transition easy-in active-hack-item-svg"
            src={ram}
            alt="CYBERDECK RAMS"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
