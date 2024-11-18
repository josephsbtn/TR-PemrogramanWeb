import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import NavbarUser from "../components/navbarUser";
import Room from "../components/room";
import Loading from "../components/loadingSpinner";
import axios from "axios";

function PinjamRuang() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Get current date and time in required formats
  const getCurrentDate = () => getTodayDate();
  const getCurrentTime = () =>
    new Date().toTimeString().split(" ")[0].slice(0, 5); // HH:mm format

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const fetchAvailableRooms = async (selectedDate, selectedTime) => {
    try {
      setLoading(true);

      // Use the provided date and time, or default to current date and time
      const requestDate = selectedDate || getCurrentDate();
      const requestTime = selectedTime || getCurrentTime();

      const { data } = await axios.post("/api/bookings/availableRooms", {
        date: requestDate,
        time: requestTime,
      });

      setRooms(data);
      setLoading(false);
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

    fetchAvailableRooms(initialDate, initialTime);
  }, []);

  const handleSearch = () => {
    if (date && time) {
      fetchAvailableRooms(date, time);
    } else {
      alert("Please select both date and time.");
    }
  };

  return (
    <section className="flex justify-between h-auto w-full bg-anotherGrey">
      <div className="h-screen w-[25%]">
        <NavbarUser />
      </div>
      <div className="h-screen w-full flex flex-col items-center">
        <Topnav />
        <div className="flex flex-col h-auto w-full justify-center items-center mt-5">
          <div className="flex space-x-4 mb-4">
            <input
              type="date"
              value={date}
              min={getCurrentDate()}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-myBlue text-white rounded hover:bg-myGrey transition-all duration-200 ease-in-out">
              Search
            </button>
          </div>
          {loading ? (
            <div className="h-screen w-full flex justify-center items-center bg-anotherGrey">
              <Loading />
            </div>
          ) : error ? (
            <div className="h-screen w-full flex justify-center items-center bg-anotherGrey">
              <h1 className="text-center w-full">Error</h1>
            </div>
          ) : (
            <div className="grid grid-cols-3 w-full h-auto mt-10 bg-anotherGrey">
              {rooms.map((room) => (
                <div
                  key={room._id}
                  className="bg-white h-fit shadow-md shadow-myGrey rounded-xl my-5 w-[85%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out">
                  <Room room={room} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PinjamRuang;
