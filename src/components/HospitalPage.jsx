import React from "react";
import { Link } from "react-router-dom";

function HospitalPage() {
  return (
    <div>
      <div className="flex justify-center">
        <h1>welcome</h1>
      </div>
      <div className="h-screen w-full flex justify-center items-center ">
        <Link to={'/hospitalForm'}>
          <button className="p-10 bg-blue-500 rounded-lg text-white font-bold">
            Create Hospital
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HospitalPage;
