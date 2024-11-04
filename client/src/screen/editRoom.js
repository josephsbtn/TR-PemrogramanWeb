import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/loadingSpinner";

function EditRoom({ match }) {
  const [room, setRoom] = useState({});
  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/rooms/${match.params.id}`);
        const { roomName, capacity, description, roomType, image } =
          response.data;
        setRoomName(roomName);
        setCapacity(capacity);
        setDescription(description);
        setRoomType(roomType);
        setImage(image);
        setLoading(false);
      } catch (error) {
        console.error("Error loading room data:", error);
        setError("Error loading room data. Please try again.");
        setLoading(false);
      }
    };
    fetchRoomData();
  }, [match.params.id]);

  function convertBase64(e) {
    const file = e.target.files[0];
    if (!file) {
      setError("No image selected.");
      return;
    }
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validImageTypes.includes(file.type)) {
      setError("Invalid file type. Only JPEG and PNG files are allowed.");
      return;
    }
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File is too large. Maximum file size is 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setError(null); // Clear error if any
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomName || !capacity || !description || !roomType) {
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
      setLoading(true);
      setError(null);
      setSuccess(false);
      await axios.post("/api/rooms/addroom", newRoom);
      setSuccess(true);
      setLoading(false);
      setRoomName("");
      setCapacity("");
      setDescription("");
      setRoomType("");
      setImage("");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(`Error: ${error.response.data.message}`);
      } else {
        setError("There was a problem with your request. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="h-screen w-full flex flex-col bg-anotherGrey">
          <Topnav />
          <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="flex w-[90%] rounded-xl h-fit flex-col justify-center bg-white">
              <div className="w-full flex justify-between items-center border-b-2 border-myBlue">
                <h1 className="text-3xl font-montserrat font-bold p-6">
                  Edit Room
                </h1>
                <Link
                  to="/roomlist"
                  className="hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 rounded-full bg-red-900 text-white">
                  X
                </Link>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-center">
                <div className="w-full flex items-center justify-center p-6">
                  <div className="flex w-[50%] flex-col text-left space-y-2">
                    <label className="font-medium font-montserrat text-base">
                      Room name
                    </label>
                    <input
                      type="text"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                      className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                      required
                    />
                    <label className="font-montserrat text-base font-medium">
                      Capacity
                    </label>
                    <input
                      type="number"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                      required
                    />
                    <label className="font-medium font-montserrat text-base">
                      Description
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-b-2 border-myBlue p-2 w-[80%] font-montserrat text-base"
                      required
                    />
                  </div>
                  <div className="flex w-[50%] flex-col text-left space-y-4">
                    <label className="font-medium font-montserrat text-base">
                      Room type
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-[80%] border-2 border-myBlue p-2 font-montserrat text-base rounded-md"
                      required>
                      <option value="classroom">Classroom</option>
                      <option value="Laboratorium">Laboratorium</option>
                      <option value="computer lab">Computer Lab</option>
                      <option value="auditorium">Auditorium</option>
                      <option value="art studio">Art Studio</option>
                    </select>
                    <label className="font-medium font-montserrat text-base">
                      Room Image
                    </label>
                    <input
                      accept="image/*"
                      type="file"
                      onChange={convertBase64}
                      className="font-montserrat text-transparent file:mr-5 file:p-2 file:w-[80%] file:bg-myBlue file:text-white file:font-medium file:rounded-xl file:hover:bg-myGrey file:transition-all file:duration-200"
                    />
                  </div>
                  <div className="w-[50%] h-full flex justify-center items-center">
                    {image && (
                      <div className="h-min-40 w-full p-2 border-2 border-myBlue rounded-xl flex justify-center items-center">
                        <img
                          alt="Selected room preview"
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
                  Save Changes
                </button>
                {error && <p className="text-red-600 ml-6">{error}</p>}
                {success && (
                  <p className="text-green-600 ml-6">
                    Room updated successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default EditRoom;
