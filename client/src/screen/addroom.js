import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import axios from "axios";
import { Link } from "react-router-dom";

function Addroom() {
  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <section className="h-screen w-full flex flex-col bg-anotherGrey">
        <Topnav />
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <div className="flex w-[90%] rounded-xl h-fit flex-col justify-center bg-white">
            <div className="w-full flex justify-between items-center border-b-2 border-myBlue">
              <h1 className="text-3xl font-montserrat font-bold p-6">
                New Room
              </h1>
              <Link
                to="/roomlist"
                className="hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 rounded-full bg-red-900 text-white"
              >
                X
              </Link>
            </div>

            <form className=" w-full flex items-center justify-center p-6">
              <div className="flex w-[50%]  flex-col text-left space-y-2 ">
                <label
                  for="name"
                  className=" font-medium font-montserrat text-base "
                >
                  Room name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  required
                />

                <label
                  for="capacity"
                  className="font-montserrat text-base font-medium"
                >
                  Capacity
                </label>
                <input
                  type="text"
                  id="capacity"
                  name="capacity"
                  className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                />
                <label
                  for="deskripsi"
                  className=" font-medium font-montserrat text-base "
                >
                  Description
                </label>
                <input
                  type="text"
                  id="deskripsi"
                  name="deskripsi"
                  className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="flex h-full w-[50%] flex-col text-left space-y-4 ">
                <label
                  for="type"
                  className=" font-medium font-montserrat text-base text-left "
                >
                  Room type
                </label>

                <select
                  name="type"
                  id="type"
                  className="w-[80%] border-2 border-myBlue p-2 font-montserrat text-base rounded-md"
                  value={roomType}
                  onChange={(e) => setRoomName(e.target.value)}
                  required
                >
                  <option value="classroom">Classroom</option>
                  <option value="Laboratorium">Laboratorium</option>
                  <option value="computer lab">Computer Lab</option>
                  <option value="auditorium">Auditorium</option>
                  <option value="art studio">Art Studio</option>
                </select>

                <label
                  for="image"
                  className=" font-medium font-montserrat text-base "
                >
                  Room Image
                </label>
                <input
                  accept="image/*"
                  name="image"
                  type="file"
                  className="font-montserrat text-transparent file:mr-5 file:p-2 file:w-[80%]  file:bg-myBlue file:text-white file:font-medium file:font-montserrat file:rounded-xl file:hover:bg-myGrey  file:transition-all file:duration-200"
                />
              </div>
              <div className="w-[50%] h-full flex justify-center items-center ">
                <div className="h-min-40 w-full p-2 border-2 border-myBlue rounded-xl flex justify-center items-center">
                  {/* preview Image */}
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="bg-myBlue text-white font-medium font-montserrat rounded-xl p-2 w-[20%] ml-6 mb-8 hover:bg-myGrey transition-all duration-200"
            >
              Add Room
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addroom;
