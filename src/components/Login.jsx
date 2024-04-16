import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="text-5xl font-extrabold">Login</h1>
      </div>
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

      <div className="p-10 flex flex-col gap-6 ">
        <input
          type="email"
          placeholder="Email"
          className="w-1/4 px-5 py-2 border-black  "
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="w-1/4 px-5 py-2 border-black "
        ></input>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-1/4 px-5 py-2 border-black "
        ></input>
        <div className="">
          <Link to={'/userPage'} >
            <button className="bg-blue-300 px-5 py-2 rounded-md font-bold">
              Login
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/signup"}>
            <h3>Create Account</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
