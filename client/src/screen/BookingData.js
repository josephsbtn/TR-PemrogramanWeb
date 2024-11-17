import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import Navbar from "../components/navbar";
import ItemBook from "../components/ItemBook";
import LoadingSpinner from "../components/loadingSpinner";

function BookingData() {
  const [bookingData, setBookingData] = useState([]);
  const [status, setStatus] = useState("All");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/bookings/getallbookings");
        const data = await response.json();
        setBookingData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBookingData();
  }, []);

  // Count bookings based on status
  const approvedBookingsCount = bookingData.filter(
    (booking) => booking.status === "approved"
  ).length;

  const rejectedBookingsCount = bookingData.filter(
    (booking) => booking.status === "rejected"
  ).length;

  const expiredBookingsCount = bookingData.filter(
    (booking) => booking.status === "expired"
  ).length;

  return (
    <>
      <section className="flex h-screen w-full bg-anotherGrey">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>

        <div className="w-full h-fit flex flex-col items-center bg-anotherGrey">
          <Topnav />
          <div className="flex justify-center items-center w-full mt-8 space-x-20">
            <div className="w-fit h-fit flex flex-col justify-center items-center p-4 rounded-2xl bg-white">
              <h1 className="text-base font-bold text-red-700 font-montserrat">
                Rejected Booking
              </h1>
              <h1 className="font-montserrat font-bold text-myBlue">
                {rejectedBookingsCount}
              </h1>
            </div>
            <div className="w-fit h-fit flex flex-col justify-center items-center p-4 rounded-2xl bg-white">
              <h1 className="text-base font-bold text-green-700 font-montserrat">
                Approved Booking
              </h1>
              <h1 className="font-montserrat font-bold text-myBlue">
                {approvedBookingsCount}
              </h1>
            </div>
            <div className="w-fit h-fit flex flex-col justify-center items-center p-4 rounded-2xl bg-white">
              <h1 className="text-base font-bold text-myGrey font-montserrat">
                Expired Booking
              </h1>
              <h1 className="font-montserrat font-bold text-myBlue">
                {expiredBookingsCount}
              </h1>
            </div>
          </div>

          <div className="w-[90%] h-full flex flex-col items-center justify-center mt-10 bg-white py-3 rounded-2xl">
            <div className="bg-myBlue w-fit h-auto flex items-center justify-center  p-4 m-4 rounded-2xl">
              <h1 className="text-base font-montserrat font-bold text-white">
                filter
              </h1>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-fit  ml-4 bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="All">All</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="expired">Expired</option>
              </select>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && bookingData.length === 0 && (
              <p>No bookings available.</p>
            )}
            {(status === "approved" &&
              bookingData
                .filter((booking) => booking.status === "approved")
                .map((booking) => (
                  <div
                    key={booking._id}
                    className="w-full  bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between">
                    <ItemBook bookings={booking} />
                  </div>
                ))) ||
              (status === "rejected" &&
                bookingData
                  .filter((booking) => booking.status === "rejected")
                  .map((booking) => (
                    <div
                      key={booking._id}
                      className="w-full  bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between">
                      <ItemBook bookings={booking} />
                    </div>
                  ))) ||
              (status === "expired" &&
                bookingData
                  .filter((booking) => booking.status === "expired")
                  .map((booking) => (
                    <div
                      key={booking._id}
                      className="w-full  bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between">
                      <ItemBook bookings={booking} />
                    </div>
                  ))) ||
              (status === "All" &&
                bookingData.map((booking) => (
                  <div
                    key={booking._id}
                    className="w-full  bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between">
                    <ItemBook bookings={booking} />
                  </div>
                )))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingData;
