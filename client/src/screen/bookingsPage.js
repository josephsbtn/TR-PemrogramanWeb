import axios from "axios";
import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";
function BookingsPage() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const { roomid } = useParams();
  const [startDate, setStartDate] = useState(null);

  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [purpose, setPurpose] = useState("");
  const [attendees, setAttendees] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const SubmitBooking = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!startDate || !purpose || !attendees || !startTime || !endTime) {
      setError("Please fill in all required fields.");
      return;
    }

    const newBooking = {
      roomid,
      userid: user._id,
      startDate,
      startTime,
      endTime,
      purpose,
      attendees,
    };

    try {
      setLoading(true);
      const result = await axios.post("/api/bookings/newBookings", newBooking);
      console.log(result.data);
      setSuccess(true);
      setLoading(false);
      window.location.href = "/bookRoomList"; // Redirect on success
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        console.log("Server Error:", error.response.data.message);
        setError(`Error: ${error.response.data.message}`);
      } else {
        console.log("Network Error:", error);
        setError("Network error. Please try again later.");
      }
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className="flex flex-col h-screen justify-start items-center w-full bg-anotherGrey ">
          <Topnav />
          <form
            onSubmit={SubmitBooking}
            className="flex flex-col py-4 bg-white w-[80%] mt-20 h-fit rounded-lg justify-center items-center">
            <div className="w-full flex items-center border-b-4 border-myBlue">
              <h1 className=" w-full text-center text-2xl text-myBlue font-montserrat font-semibold  p-2 pb-4">
                Your Booking
              </h1>

              <Link
                to="/bookRoomList"
                className="hover:bg-red-700 transition-all duration-300 text-base h-8 w-8 flex justify-center items-center font-montserrat font-medium mr-6 mb-4 rounded-full bg-red-900 text-white">
                X
              </Link>
            </div>

            <div className="w-full flex justify-center items-center mt-4 space-x-8">
              <div className="flex flex-col w-full max-w-xs space-y-2">
                <label className="text-myBlue font-montserrat font-medium text-base">
                  Booking Date Time
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={getTodayDate()}
                  className="p-2 rounded-lg border text-montserrat font-medium text-sm text-myBlue"
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                />

                <label className="text-myBlue font-montserrat font-medium text-base">
                  From
                </label>
                <input
                  className="p-2 rounded-lg border text-montserrat font-medium text-sm text-myBlue"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />

                <label className="text-myBlue font-montserrat font-medium text-base">
                  To
                </label>
                <input
                  className="p-2 rounded-lg border text-montserrat font-medium text-sm text-myBlue"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  min={startTime || undefined}
                />
              </div>
              <div className="flex text-myBlue flex-col w-full max-w-xs space-y-2">
                <label className="text-myBlue font-montserrat font-medium text-base">
                  Number of Attendees{" "}
                </label>
                <input
                  type="number"
                  className="p-2 rounded-lg border text-montserrat font-medium text-sm text-myBlue"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                />
                <label
                  className="text-myBlue font-montserrat font-medium text-base"
                  x>
                  Purpose
                </label>
                <textarea
                  className="p-2 rounded-lg border text-montserrat font-medium text-sm text-myBlue"
                  onChange={(e) => setPurpose(e.target.value)}
                />
              </div>
            </div>

            {error ? (
              <p className="text-montserrat font-medium text-red-500 text-sm mt-2">
                {error}
              </p>
            ) : success ? (
              <p className="text-montserrat font-medium text-green-500 text-sm mt-2">
                Booking added successfully!
              </p>
            ) : null}

            <button
              type="submit"
              className="bg-myBlue text-white p-2 rounded-lg px-8 mt-4 text-montserrat font-medium text-base hover:bg-myGrey">
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default BookingsPage;
