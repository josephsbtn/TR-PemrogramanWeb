import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Room({ room }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isRoomBooked, setIsRoomBooked] = useState(false); // State to track booking status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCurrentDate = () => new Date().toISOString().split("T")[0];
  const getCurrentTime = () =>
    new Date().toTimeString().split(" ")[0].slice(0, 5); // HH:mm format

  const fetchAvailableRooms = async () => {
    try {
      setLoading(true);

      const requestDate = getCurrentDate();
      const requestTime = getCurrentTime();

      // Fetch the list of booked rooms
      const { data } = await axios.post("/api/bookings/availableRooms", {
        date: requestDate,
        time: requestTime,
      });

      setIsRoomBooked(!data.some((bookedRoom) => bookedRoom._id === room._id));
      setLoading(false);
      console.log("Booked room IDs:", data);
    } catch (error) {
      setError(true);
      console.error("Error fetching available rooms:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialDate = getCurrentDate();
    const initialTime = getCurrentTime();
    setDate(initialDate);
    setTime(initialTime);

    fetchAvailableRooms(); 
  }, [room._id]); 

  return (
    <>
      <Link
        to={user.isAdmin ? `/editroom/${room._id}` : `/roomDetail/${room._id}`}
        className="flex flex-col justify-start items-start">
        <img
          src={room.image}
          className="w-full h-40 object-cover my-2 rounded-xl"
        />
        <h1 className="text-myBlue font-montserrat font-bold">
          {room.roomName}
        </h1>
        <h1 className="text-myBlue font-montserrat font-medium text-sm">
          Capacity : {room.capacity}
        </h1>
        <h1 className="text-myBlue font-montserrat font-medium text-sm">
          Room Type : {room.roomType}
        </h1>

        {/* Show booking status */}
        {loading ? (
          <p>Loading...</p>
        ) : isRoomBooked ? (
          <p className="text-red-500">This room is already booked</p>
        ) : (
          <p className="text-green-500">This room is available for booking.</p>
        )}
      </Link>
    </>
  );
}

export default Room;
