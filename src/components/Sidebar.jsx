import React from "react";
import CheckBedAvailability from "./CheckBedAvailability";

const Sidebar = ({ onOptionClick, selectedOption }) => {
  return (
    <div className="sidebar w-1/4 h-screen bg-slate-600 p-10 ">
      <ul className="gap-10">
        <li
        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Check bed availability' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`} 
        onClick={() => onOptionClick('Check bed availability')}
        >
          Check bed availability
        </li>
        <li
        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Online Consultencies' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`} 
        onClick={() => onOptionClick('Online Consultencies')}
        >
          Online Consultencies
        </li>
        <li
        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Diebetic Predictor' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`} 
        onClick={() => onOptionClick('Diebetic Predictor')}
        >
          Diebeties Predictor
        </li>
        <li
        className={`py-2 px-4 cursor-pointer ${selectedOption === 'Heart Disease Predictor' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`} 
        onClick={() => onOptionClick('Heart Disease Predictor')}
        >
          Heart Disease Predictor
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
