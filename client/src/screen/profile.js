import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-fit p-4 rounded-xl bg-anotherGrey px-6 max-w-lg mx-auto">
        <div className="text-left w-full mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Account</h3>
          <p className="text-gray-500"></p>
        </div>

        {/* Logo User dan Username */}
        <div className="flex items-center w-full mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-300 mr-6">
            <span className="text-2xl font-semibold text-gray-700">
              {user.username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-bold text-lg">
              {user.username}
            </span>
            <span className="text-gray-500">
              Status: {user.isAdmin ? "Admin" : "User"}
            </span>
            <Link
              to={user.isAdmin ? "/homeAdmin" : "/homeUser"}
              className="absolute top-10 right-10 hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 rounded-full bg-red-900 text-white"
              aria-label="Close Profile">
              X
            </Link>
          </div>
        </div>

        <div className="w-full mb-4">
          <h4 className="text-gray-700 font-semibold">Full name</h4>
          <div className="flex gap-4 mt-2">
            <div className="w-1/2">
              <label className="block text-gray-500 text-sm mb-1 font-montserrat">
                First name:
              </label>
              <h1 className="font-montserrat text-base bg-white p-3 pr-8 rounded-lg">
                {user.firstName}
              </h1>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-500 text-sm mb-1  font-montserrat">
                Last name:
              </label>
              <h1 className="font-montserrat text-base bg-white p-3 pr-8 rounded-lg">
                {user.lastName}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full mb-4">
          <h4 className="text-gray-700 font-semibold">Contact email</h4>
          <div className="flex items-center gap-4 mt-2">
            <h1 className="font-montserrat text-base bg-white p-3 pr-10 rounded-lg">
              {user.email}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
