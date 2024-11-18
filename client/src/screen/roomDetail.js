import React, { useState, useEffect } from "react";
import axios from "axios";
import Topnav from "../components/topnav";
import NavbarUser from "../components/navbarUser";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";

function RoomDetail() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const { roomid } = useParams();

  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/rooms/getallroomsID", {
          roomid,
        });
        setImage(data.image);
        setRoomName(data.roomName);
        setCapacity(data.capacity);
        setRoomType(data.roomType);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching room:", error);
        setError("Failed to load room data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomid]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-500 font-montserrat font-semibold text-xl">
          Please log in to view this page.
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-anotherGrey">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-500 font-montserrat font-semibold text-xl">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col items-center bg-anotherGrey">
      <Topnav />
      <div className="w-[90%] rounded-3xl h-fit my-2 flex flex-col justify-center items-center p-4 bg-white space-y-4">
        <div className="w-full flex items-center border-b-4 border-myBlue">
          <h1 className=" w-full text-center text-2xl text-myBlue font-montserrat font-semibold  p-2 pb-4">
            Room
          </h1>

          <Link
            to="/bookRoomList"
            className="hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 mb-4 rounded-full bg-red-900 text-white">
            X
          </Link>
        </div>

        <div className="flex justify-center items-start w-full p-2">
          <div className="h-auto w-2/4">
            <img src={image} alt={`${roomName}`} />
          </div>

          <div className="flex flex-col justify-start h-full w-1/2 items-start px-2 space-y-4">
            <h1 className="text-left font-montserrat font-bold text-lg text-myBlue border-b-2 border-myGrey">
              {roomName.toUpperCase()}
            </h1>
            <h2 className="font-montserrat font-medium text-base">
              <span className="font-bold">Capacity:</span> {capacity}
            </h2>
            <h2 className="font-montserrat font-medium text-base">
              <span className="font-bold">Type:</span> {roomType}
            </h2>
            <p className="font-montserrat font-normal text-base">
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
        </div>

        <div className="w-1/2 h-10  bg-myBlue text-white rounded-3xl text-montserrat font-semibold hover:bg-myGrey transition-all duration-200">
          <Link to={`/bookings/${roomid}`}>
            <button className="w-full h-full justify-center items-center">
              BOOKING
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
