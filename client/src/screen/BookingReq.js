import React, { useState, useEffect } from "react";
import axios from "axios";
import Topnav from "../components/topnav";
import Navbar from "../components/navbar";
import Loading from "../components/loadingSpinner";
import ItemBook from "../components/ItemBook";
import Modal from "../components/modal";

function BookingReq() {
  const [bookingRequests, setBookingRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/bookings/getallbookings");
        const data = await response.json();
        setBookingRequests(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBookingData();
  }, []);

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
    setOpen(true);
  };

  const handleAcceptClick = async () => {
    if (!selectedBooking) return;
    try {
      const response = await axios.put("/api/bookings/acceptBooking", {
        bookingId: selectedBooking._id,
      });
      console.log("Response:", response.data);
      setSuccess("Booking accepted successfully.");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setOpen(false);
      setOpenNotif(true);
      setTimeout(() => setOpenNotif(false), 5000);
    }
  };

  const handleRejectClick = async () => {
    if (!selectedBooking) return;
    try {
      const response = await axios.put("/api/bookings/rejectBooking", {
        bookingId: selectedBooking._id,
      });
      console.log("Response:", response.data);
      setSuccess("Booking rejected successfully.");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred.");
      setSuccess(false);
    } finally {
      setOpen(false);
      setOpenNotif(true);
      setTimeout(() => setOpenNotif(false), 5000);
    }
  };

  const pendingBookings = bookingRequests.filter(
    (booking) => booking.status === "pending"
  );

  return (
    <section className="flex justify-between h-auto w-full bg-anotherGrey overflow-y-hidden">
      <nav className="h-screen w-[25%]">
        <Navbar />
      </nav>
      <div className="h-screen w-full flex flex-col items-center">
        <Topnav />
        <Modal open={open} onClose={() => setOpen(false)}>
          {selectedBooking ? (
            <div className="flex flex-col items-center justify-center h-fit w-fit p-6 rounded-2xl space-y-4">
              <div className="h-fit flex justify-around items-center w-fit p-4 bg-myBlue rounded-2xl">
                <img
                  src={selectedBooking.roomid?.image || ""}
                  alt="Room"
                  className="h-auto w-1/2"
                />
                <div>
                  <p className="text-base font-normal text-white font-montserrat">
                    Booking ID: {selectedBooking._id}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Room Name: {selectedBooking.roomid?.roomName || "N/A"}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    User Name: {selectedBooking.userid?.username || "N/A"}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Start Date: {selectedBooking.startDate}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Start Time: {selectedBooking.startTime}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    End Time: {selectedBooking.endTime}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Purpose: {selectedBooking.purpose}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Status: {selectedBooking.status}
                  </p>
                  <p className="text-base font-normal text-white font-montserrat">
                    Attendees: {selectedBooking.attendees}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-green-800 text-white px-4 py-2 rounded-xl font-montserrat font-bold hover:bg-green-600"
                  onClick={handleAcceptClick}>
                  Accept
                </button>
                <button
                  className="bg-red-800 text-white px-4 py-2 rounded-xl font-montserrat font-bold"
                  onClick={handleRejectClick}>
                  Rejected
                </button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </Modal>

        <Modal open={openNotif} onClose={() => setOpenNotif(false)}>
          <div className="p-4 rounded-2xl bg-myBlue">
            <h1 className="text-lg font-bold text-white font-montserrat">
              {success ? success : error}
            </h1>
          </div>
        </Modal>

        <div className="w-full h-full flex flex-col items-center justify-center">
          {loading ? (
            <Loading />
          ) : (
            <div className="w-[80%] h-full flex flex-col bg-white mt-8 items-start justify-start rounded-xl p-4">
              <h1 className="text-xl font-bold text-myBlue font-montserrat">
                Booking Requests
              </h1>
              <div className="w-full h-full flex flex-col items-center justify-start mt-5">
                {pendingBookings.length === 0 ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-lg font-bold text-myBlue font-montserrat">
                      No pending booking requests found
                    </p>
                  </div>
                ) : (
                  pendingBookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="w-full bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between"
                      onClick={() => handleBookingClick(booking)}>
                      <ItemBook bookings={booking} />
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookingReq;
