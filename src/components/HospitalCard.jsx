import React from "react";

const HospitalCard = () => {
  return (
    <div className="p-10 border border-black rounded-lg w-full bg-red-300">

      <div className="flex justify-around gap-10 ">
        <h1 className="font-bold text-3xl">XYZ hospitals</h1>
        <div>
          <h1 className="text-5xl font-bold ">18</h1>
          <h3>Beds Available</h3>
        </div>
      </div>
      <div>
        <h3>Near, Champadali more , Barasat , PIN-803302</h3>
      </div>
      
    </div>
  );
};

export default HospitalCard;
