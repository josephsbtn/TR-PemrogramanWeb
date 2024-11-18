import React from "react";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-fit p-4 rounded-xl bg-anotherGrey px-6 max-w-lg mx-auto">
        <div className="text-left w-full mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Account</h3>
          <p className="text-gray-500"></p>
        </div>

        <div className="flex items-center w-full mb-6">
          <img
            src="https://via.placeholder.com/75"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div className="flex flex-col">
            <span className="text-gray-500">PNG, JPEG under 15MB</span>
            <span className="text-gray-500">
              status: {user.isUser ? <>Admin</> : <>User</>}
            </span>
            <Link
              to={user.isAdmin ? "/homeAdmin" : "/homeUser"}
              className="absolute top-10 right-10 hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 rounded-full bg-red-900 text-white"
              aria-label="Close Profile">
              X
            </Link>

            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 border rounded bg-myBlue text-white border-gray-400 hover:bg-myGrey  font-montserrat font-bold">
                Upload new picture
              </button>
              <button className="px-4 py-2 border rounded text-red-500 border-red-400 hover:bg-red-100">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mb-4">
          <h4 className="text-gray-700 font-semibold">Full name</h4>
          <div className="flex gap-4 mt-2">
            <div className="w-1/2">
              <label className="block text-gray-500 text-sm mb-1 font-montserrat">
                First name :
              </label>
              <input
                type="text"
                defaultValue={user.firstName}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-500 text-sm mb-1 font-montserrat">
                Last name
              </label>
              <input
                type="text"
                defaultValue={user.lastName}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full mb-4">
          <h4 className="text-gray-700 font-semibold">Contact email</h4>
          <p className="text-gray-500 text-sm">
            Manage your account's email address
          </p>
          <div className="flex items-center gap-4 mt-2">
            <input
              type="email"
              defaultValue=" "
              className="border rounded px-3 pt-2 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
