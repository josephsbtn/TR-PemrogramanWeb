import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/loadingSpinner";
import TrashBin from "../components/trashBin";
import Modal from "../components/modal";

function EditRoom() {
  const { roomid } = useParams();
  const [room, setRoom] = useState(null);
  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/rooms/getallroomsID", {
          roomid,
        });
        setRoom(data);
        setRoomName(data.roomName);
        setCapacity(data.capacity);
        setRoomType(data.roomType);
        setDescription(data.description);
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching room:", error);
        setError("Failed to load room data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomid]);

  const convertBase64 = (e) => {
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
      setError(null);
    };
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await axios.delete("/api/rooms/deleteRoom", {
        data: { roomid },
      });
      setSuccess(true);
      window.location.href = "/roomlist";
      setLoading(false);
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomName || !capacity || !description || !roomType) {
      setError("Please fill in all required fields.");
      return;
    }

    const updatedRoom = {
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
      await axios.put("/api/rooms/updateRoom", {
        ...updatedRoom,
        roomid,
      });
      setSuccess(true);
      window.location.href = "/roomlist";
      setLoading(false);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "There was a problem with your request. Please try again."
      );
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <sectiosn className="h-screen w-full flex flex-col bg-anotherGrey">
          <Topnav />
          <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex flex-col items-center justify-center h-fit w-fit p-6 rounded-2xl space-y-4">
              <div className="h-fit w-fit p-4 bg-red-800 rounded-full">
                <TrashBin />
              </div>

              <h6 className="text-md font-montserrat text-black font-bold text-center ">
                Are you sure you want <br /> to delete this room?
              </h6>
              <div className="flex space-x-4">
                <button
                  className="bg-red-800 text-white px-4 py-2 rounded-xl font-montserrat font-bold"
                  onClick={handleDelete}>
                  Yes
                </button>
                <button onClick={() => setOpen(false)}>No</button>
              </div>
            </div>
          </Modal>
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
                      <option value="" disabled>
                        Select room type
                      </option>

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

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-myBlue text-white font-medium font-montserrat rounded-xl p-2 w-[20%] ml-6 mb-8 hover:bg-myGrey transition-all duration-200">
                    Save Changes
                  </button>
                </div>

                {error && <p className="text-red-800 ml-6">{error}</p>}
                {success && (
                  <p className="text-green-600 ml-6">
                    Room updated successfully!
                  </p>
                )}
              </form>
              <div className="w-full flex justify-end">
                <button
                  className="bg-red-800 rounded-full h-fit w-fit p-2 m-4 on"
                  type="button"
                  onClick={() => setOpen(true)}>
                  <TrashBin />
                </button>
              </div>
            </div>
          </div>
        </sectiosn>
      )}
    </>
  );
}

export default EditRoom;
