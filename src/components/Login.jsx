import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const login = (first_name, last_name, email, password) => {
    console.log(first_name, last_name, email, password);
  };

  return (
    <>
      <BiSolidUserCircle size="250" className="text-green-700 mx-auto p-5" />
      <b className="text-slate-800">Email:</b>
      <input
        type="email"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter email"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, email: e.target.value });
        }}
      />
      <b className="text-slate-800">First Name:</b>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter first name"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, first_name: e.target.value });
        }}
      />
      <b className="text-slate-800">Last Name:</b>
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter last name"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, last_name: e.target.value });
        }}
      />
      <b className="text-slate-800">Password:</b>
      <input
        type="password"
        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded"
        placeholder="Enter password"
        onChange={(e) => {
          var usr = user;
          setUser({ ...usr, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          login(user.first_name, user.last_name, user.email, user.password);
        }}
        className="w-full px-4 py-2 mt-2 text-white border border-gray-200 rounded-md shadow-lg bg-green-700 mt-5"
      >
        Submit
      </button>
    </>
  );
};

export default Login;
