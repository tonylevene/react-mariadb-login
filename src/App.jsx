import React, { useState } from "react";

const App = () => {
  const [selectedItem, setSelectedItem] = useState("Login");

  return (
    <div className="w-full h-full absolute bg-slate-400">
      <div className="mx-auto mt-10 max-w-sm bg-slate-200 items-center block rounded-xl shadow-lg">
        <div className="top-0 left-0 cursor-pointer select-none">
          <a
            onClick={() => setSelectedItem("Login")}
            className={
              "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
              (selectedItem === "Login" ? " bg-slate-300" : "")
            }
          >
            Login
          </a>
          <a
            onClick={() => setSelectedItem("Signup")}
            className={
              "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
              (selectedItem === "Signup" ? " bg-slate-300" : "")
            }
          >
            Signup
          </a>
          <a
            onClick={() => setSelectedItem("Edit Profile")}
            className={
              "float-left w-1/3 text-center rounded-se-xl rounded-ss-xl" +
              (selectedItem === "Edit Profile" ? " bg-slate-300" : "")
            }
          >
            Edit Profile
          </a>
        </div>
        <div className="bg-slate-300 inline-flex rounded-es-xl rounded-ee-xl p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
          cum nemo, impedit minima qui, soluta quisquam earum tempore quae
          facilis nisi fugit provident reiciendis, aperiam laboriosam
          consequatur? Porro, saepe?
        </div>
      </div>
    </div>
  );
};

export default App;
