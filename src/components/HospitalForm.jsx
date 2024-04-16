import React from "react";

function HospitalForm() {
  return (
    <div>
      <div className="flex p-10 flex-col gap-7 ">
        <div>
          <input
            type="text"
            placeholder="Hospital Name"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border  "
          />
          <input
            type="text"
            placeholder="Hospital ID"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
          <input
            type="text"
            placeholder="Address"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone no."
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
          <input
            type="text"
            placeholder="Phone no."
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Beds Available"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
          <input
            type="text"
            placeholder="Doctors Available"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Hospital photo"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm password"
            className="border-gray-800 w-1/4 px-5 py-2 rounded-xl border"
          />
        </div>
      </div>
      <div>
        <button className="px-5 py-2 bg-blue-500">Register</button>
      </div>
    </div>
  );
}

export default HospitalForm;
