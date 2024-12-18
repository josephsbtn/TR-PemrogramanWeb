import React, { useState, useEffect } from "react";
import NavbarUser from "../components/navbarUser";
import Topnav from "../components/topnav";
import axios from "axios";
import DITOLAK from "../components/DITOLAK";
import TERSEDIA from "../components/TERSEDIA";
import DIACC from "../components/DIACC";
import Room from "../components/room";
import Loading from "../components/loadingSpinner";
import Rejected from "../components/Rejected";
import Approved from "../components/Approved";

function UserHome() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [roomBooked, setRoomBooked] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [randomRooms, setRandomRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user._id) {
        console.error("User not logged in or user ID missing.");
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`/api/bookings/getUserBookings`, {
          params: { userid: user._id },
        });

        console.log("Full Bookings Response Data:", response.data); // Debug API response
        setBookings(response.data); // Update state with bookings array

        // Log each booking's user ID
        response.data.forEach((booking, index) => {
          console.log(
            `Booking ${index + 1} User ID:`,
            booking.userid?._id || "No User ID"
          );
        });

        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching bookings:", error.message);
        setBookings([]); // Reset bookings on error
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user._id]);

  const getCurrentDate = () => new Date().toISOString().split("T")[0];
  const getCurrentTime = () =>
    new Date().toTimeString().split(" ")[0].slice(0, 5);

  const fetchAvailableRooms = async () => {
    try {
      setLoading(true);

      const requestDate = getCurrentDate();
      const requestTime = getCurrentTime();

      const { data } = await axios.post("/api/bookings/availableRooms", {
        date: requestDate,
        time: requestTime,
      });

      setRoomBooked(data);
      setLoading(false);
      console.log("Booked room IDs:", data);
    } catch (error) {
      setError(true);
      console.error("Error fetching available rooms:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        console.log("Rooms:", data);
        setRooms(data);
        selectRandomRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching rooms:", error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const selectRandomRooms = (allRooms) => {
    if (allRooms.length <= 4) {
      setRandomRooms(allRooms);
    } else {
      const shuffled = [...allRooms].sort(() => 0.5 - Math.random());
      setRandomRooms(shuffled.slice(0, 4));
    }
  };

  const approvedCount = bookings.filter(
    (booking) =>
      booking.status === "approved" && booking.userid?._id === user._id
  ).length;

  const rejectedCount = bookings.filter(
    (booking) =>
      booking.status === "rejected" && booking.userid?._id === user._id
  ).length;

  return (
    <>
      <section className="flex h-auto w-full bg-anotherGrey">
        <nav className="h-screen w-[25%]">
          <NavbarUser />
        </nav>

        <div className="w-full flex flex-col items-center">
          <Topnav />

          <div className="flex justify-center my-9 w-full">
            <div className="grid grid-cols-3 gap-6 w-[80%]">
              {/* Available Rooms */}
              <div className="flex flex-col items-center justify-center w-full h-full p-4 border bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center scale-90 p-5 bg-green-900 rounded-full mb-4">
                  <TERSEDIA />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  {roomBooked.length}
                </h1>
                <h1 className="text-base font-medium text-gray-600">
                  Ruangan Tersedia
                </h1>
              </div>

              {/* Rejected Requests */}
              <div className="flex flex-col items-center justify-center w-full h-full p-4 border bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center scale-110 items-center p-5 bg-red-900 rounded-full mb-4">
                  <Rejected />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  {rejectedCount}
                </h1>
                <h1 className="text-base font-medium text-gray-600">
                  Peminjaman Ditolak
                </h1>
              </div>

              {/* Approved Requests */}
              <div className="flex flex-col items-center justify-center w-full h-full p-4 border bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center scale-110 items-center p-5 bg-myBlue text-blue-600 rounded-full mb-4">
                  <Approved />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">
                  {approvedCount}
                </h1>
                <h1 className="text-base font-medium text-gray-600">
                  Permintaan Disetujui
                </h1>
              </div>
            </div>
          </div>

          {/* Section to display random rooms */}
          <div className="flex flex-col h-auto w-[90%] justify-center items-center bg-myGrey m-5 rounded-3xl">
            <h1 className="text-left text-xl font-montserrat font-bold text-white p-4 mt-4">
              Recommended Rooms
            </h1>
            {loading ? (
              <div className="h-auto w-full flex justify-center items-center bg-myGrey">
                <Loading />
              </div>
            ) : error ? (
              <div className="h-auto w-full flex justify-center items-center bg-myGrey">
                <h1 className="text-center w-full">Error</h1>
              </div>
            ) : (
              <div className="grid grid-cols-4 h-auto p-4 rounded-xl">
                {randomRooms.map((room) => (
                  <div
                    key={room._id}
                    className="bg-white h-fit shadow-md shadow-myGrey rounded-xl w-[90%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out">
                    <Room room={room} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserHome;
