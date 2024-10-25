import axios from "axios";
import Room from "../components/room";
import React, { useEffect, useState } from "react";

function BookingsPage({ match }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const { data } = (
          await axios.get("/api/rooms/getroombyId", {
            roomid: match.params.id,
          })
        ).data;
        console.log("data:", data);
        setRooms(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Bookings Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something went wrong, please try again later.</p>
      ) : (
        <div className="">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room._id}>
                <h3>{room.name}</h3>
                <p>Capacity: {room.capacity}</p>
                <p>Status: {room.statusDipinjam ? "Booked" : "Available"}</p>
                <img src={room.image[0]} alt={room.name} width="200" />
                <p>{room.description}</p>
              </div>
            ))
          ) : (
            <p>No rooms available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingsPage;
