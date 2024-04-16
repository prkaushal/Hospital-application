import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



function Signup() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="text-5xl font-extrabold">Sign up</h1>
      </div>
      <div className=" flex justify-end px-10 py-5  ">
        <div className=" flex justify-end px-10 py-5  ">
          <button
            className={`py-2 px-4 mr-2 focus:outline-none ${
              activeButton === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleClick(1)}
          >
            Patient
          </button>

          <button
            className={`py-2 px-4 focus:outline-none ${
              activeButton === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleClick(2)}
          >
            Admin
          </button>
        </div>
      </div>

      <div className="p-10 flex flex-col gap-6 ">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-1/4 px-5 py-2 border-black  "
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/4 px-5 py-2 border-black "
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-1/4 px-5 py-2 border-black  "
          ></input>
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-1/4 px-5 py-2 border-black "
          ></input>
        </div>
        <div>
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-1/4 px-5 py-2 border-black  "
          ></input>
          <div>
            <label for="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <input
            type="password"
            placeholder="Password"
            className="w-1/4 px-5 py-2 border-black "
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-1/4 px-5 py-2 border-black "
          ></input>
        </div>

        <div className="flex justify-center">
          <Link to={'/hospitalPage'} >
            <button className="bg-blue-300 px-5 py-2 rounded-md font-bold">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
