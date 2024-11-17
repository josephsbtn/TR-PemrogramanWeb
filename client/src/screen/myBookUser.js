import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarUser from "../components/navbarUser";
import Topnav from "../components/topnav";
import axios from "axios";
import ItemBook from "../components/ItemBook";
import Loading from "../components/loadingSpinner";
import Approved from "../components/Approved";
import Rejected from "../components/Rejected";
import Pending from "../components/pending";
import Expired from "../components/Expired";
function MyBookUser() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/bookings/getUserBookings`, {
          params: { userid: user._id },
        });
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching bookings:", error.message, error.config);
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user._id]); // Dependency array ensures fetch runs only when user._id changes.

  return (
    <>
      <section className="flex w-full h-auto bg-anotherGrey">
        <nav className="h-screen w-[25%]">
          <NavbarUser />
        </nav>
        <div className="h-screen w-full flex flex-col items-center">
          <Topnav />
          <div className="flex flex-col justify-center items-center w-full h-auto p-4">
            <div className="w-[90%] h-full flex flex-col items-center justify-center mt-10  py-3 rounded-2xl">
              {loading ? (
                <div className="w-full h-full flex justify-center p-4 items-center">
                  <Loading />
                </div>
              ) : error ? (
                <div className="w-full flex justify-center">
                  <h1 className="text-center p-4 w-1/4  rounded-2xl text-red-800 font-montserrat font-bold">
                    Something Wrong Please Try Again!!
                  </h1>
                </div>
              ) : (
                <div className="w-[90%] h-auto flex flex-col items-center justify-center bg-white py-4 rounded-2xl">
                  <h1 className="p-4 font-montserrat font-bold text-lg text-myBlue">
                    Your Bookings
                  </h1>
                  {bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="w-full  bg-opacity-20 h-fit flex border-y-2 border-black border-opacity-50 items-center justify-between">
                      <ItemBook bookings={booking} />
                      {(() => {
                        if (booking.status === "approved") {
                          return (
                            <div className="w-1/4 h-full flex justify-center items-center bg-green-800">
                              <Approved />
                            </div>
                          );
                        } else if (booking.status === "rejected") {
                          return (
                            <div className="w-1/2 h-full flex justify-center items-center bg-red-800">
                              <Rejected />
                              {/* Assuming Rejected is a valid component */}
                            </div>
                          );
                        } else if (booking.status === "pending") {
                          return (
                            <div className="w-1/2 h-full flex justify-center items-center bg-yellow-400">
                              <Pending />
                            </div>
                          );
                        } else if (booking.status === "expired") {
                          return (
                            <div className="w-fit px-4 h-full flex justify-center items-center bg-myGrey">
                              <Expired />
                            </div>
                          );
                        }
                      })()}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyBookUser;
