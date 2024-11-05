import axios from "axios";
import Room from "../components/room";
import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import { Link, useParams } from "react-router-dom";

function BookingsPage({ match }) {
  const { roomid } = useParams();
  const [rooms, setRooms] = useState();
  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/rooms/getallroomsID", {
          roomid,
        });
      } catch (error) {
        console.error("Error fetching room:", error);
        setError("Failed to load room data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomid]);
  return (
    <div>
      <Topnav />
    </div>
  );
}

export default BookingsPage;
