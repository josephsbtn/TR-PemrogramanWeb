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

  function convertBase64(e) {
    const file = e.target.files[0];
    if (!file) {
      setError(true);
      console.log("No image selected");
      return false;
    }
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      setError(true);
      console.log("Invalid file type. Only JPEG and PNG files are allowed.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError(true);
      console.log("File is too large. Maximum file size is 2MB.");
      return;
    }
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        setImage(reader.result);
      };
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const Submit = async (e) => {
    e.preventDefault();
    if (!roomName || !capacity || !description || !roomType || !image) {
      setError("Please fill in all required fields.");
      return;
    }
    const newRoom = {
      roomName,
      capacity,
      description,
      roomType,
      image,
    };
    try {
      const result = await axios.post("/api/rooms/addroom", newRoom);
      console.log(result.data);
      setSuccess(true);

      setRoomName("");
      setCapacity("");
      setDescription("");
      setRoomType("");
      setImage("");
      window.location.href = "/roomlist";
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("Server Error:", error.response.data.message);
        setError(`Error: ${error.response.data.message}`);
      } else {
        console.log("Network Error:", error);
        setError("There was a problem with your request. Please try again.");
      }
    }
  };

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
                className="hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 rounded-full bg-red-900 text-white">
                X
              </Link>
            </div>

            <form
              onSubmit={Submit}
              className=" w-full flex flex-col  justify-center">
              <div className=" w-full flex items-center justify-center p-6">
                <div className="flex w-[50%]  flex-col text-left space-y-2 ">
                  <label
                    for="name"
                    className=" font-medium font-montserrat text-base ">
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
                    className="font-montserrat text-base font-medium">
                    Capacity
                  </label>
                  <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    required
                  />
                  <label
                    for="deskripsi"
                    className=" font-medium font-montserrat text-base ">
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
                    className=" font-medium font-montserrat text-base text-left ">
                    Room type
                  </label>

                  <select
                    name="type"
                    id="type"
                    className="w-[80%] border-2 border-myBlue p-2 font-montserrat text-base rounded-md"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    required>
                    <option value="" disabled>
                      Select room type
                    </option>
                    <option value="classroom">Classroom</option>
                    <option value="Laboratorium">Laboratorium</option>
                    <option value="computer lab">Computer Lab</option>
                    <option value="auditorium">Auditorium</option>
                    <option value="art studio">Art Studio</option>
                  </select>

                  <label
                    for="image"
                    className=" font-medium font-montserrat text-base ">
                    Room Image
                  </label>
                  <input
                    accept="image/*"
                    name="image"
                    type="file"
                    onChange={convertBase64}
                    className="font-montserrat text-transparent file:mr-5 file:p-2 file:w-[80%]  file:bg-myBlue file:text-white file:font-medium file:font-montserrat file:rounded-xl file:hover:bg-myGrey  file:transition-all file:duration-200"
                  />
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                  {image == "" || image == null ? (
                    <h1></h1>
                  ) : (
                    <div className="h-min-40 w-full p-2 border-2 border-myBlue rounded-xl flex justify-center items-center">
                      <img
                        alt="Room"
                        src={image}
                        className="w-full h-60 object-fill rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-myBlue text-white font-medium font-montserrat rounded-xl p-2 w-[20%] ml-6 mb-8 hover:bg-myGrey transition-all duration-200">
                Add Room
              </button>
              {error && <p className="text-red-600 ml-6">{error.message}</p>}
              {success && (
                <p className="text-green-600 ml-6">Room added successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addroom;
