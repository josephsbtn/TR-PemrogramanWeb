import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Topnav from "../components/topnav";
import Room from "../components/room";
import Loading from "../components/loadingSpinner";
import Homecheck from "../components/homecheck";
import axios from "axios";

function HomePage() {
  const [rooms, setRooms] = useState([]);
  const [roomBooked, setRoomBooked] = useState([]);
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

      setLoading(false);
      console.log("Booked room IDs:", data);
      setRoomBooked(data);
    } catch (error) {
      setError(true);
      console.error("Error fetching available rooms:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
  }, [rooms._id]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        console.log("data :", data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        const users = (await axios.get("/api/users/getallusers")).data;
        console.log("users :", users);
        SetUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    fetchRooms();
    return () => {};
  }, []);

  return (
    <>
      <section className="flex h-fit w-full bg-anotherGrey ">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>

        <div className="w-full flex flex-col items-center">
          <Topnav />

          <div className="flex justify-center my-9 w-full">
            <div className="flex w-[80%]  h-fit justify-around items-center">
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] p-2 border bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 bg-myGrey">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="fluent-mdl2:room">
                      <path
                        id="Vector"
                        d="M37.5 2.5V35H28.8672L19.6289 36.8555L15 37.7734V15.2148L27.5 12.7148V12.5H12.5V35H2.5V2.5H37.5ZM17.5 17.2852V34.7266L27.5 32.7148V15.2734L17.5 17.2852ZM35 32.5V5H5V32.5H10V10H30V32.5H35Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Rooms Count
                </h1>
                <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                  {rooms.length}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] border p-2 bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 bg-myGrey">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="bx:user">
                      <path
                        id="Vector"
                        d="M15 2.5C13.7639 2.5 12.5555 2.86656 11.5277 3.55331C10.4999 4.24007 9.6988 5.21619 9.22575 6.35823C8.75271 7.50027 8.62893 8.75693 8.87009 9.96932C9.11125 11.1817 9.7065 12.2953 10.5806 13.1694C11.4547 14.0435 12.5683 14.6388 13.7807 14.8799C14.9931 15.1211 16.2497 14.9973 17.3918 14.5242C18.5338 14.0512 19.5099 13.2501 20.1967 12.2223C20.8834 11.1945 21.25 9.98613 21.25 8.75C21.25 7.0924 20.5915 5.50269 19.4194 4.33058C18.2473 3.15848 16.6576 2.5 15 2.5ZM15 12.5C14.2583 12.5 13.5333 12.2801 12.9166 11.868C12.2999 11.456 11.8193 10.8703 11.5355 10.1851C11.2516 9.49984 11.1774 8.74584 11.3221 8.01841C11.4667 7.29098 11.8239 6.6228 12.3483 6.09835C12.8728 5.5739 13.541 5.21675 14.2684 5.07206C14.9958 4.92736 15.7498 5.00162 16.4351 5.28545C17.1203 5.56928 17.706 6.04993 18.118 6.66661C18.5301 7.2833 18.75 8.00832 18.75 8.75C18.75 9.74456 18.3549 10.6984 17.6517 11.4017C16.9484 12.1049 15.9946 12.5 15 12.5ZM26.25 26.25V25C26.25 22.6794 25.3281 20.4538 23.6872 18.8128C22.0462 17.1719 19.8206 16.25 17.5 16.25H12.5C10.1794 16.25 7.95376 17.1719 6.31282 18.8128C4.67187 20.4538 3.75 22.6794 3.75 25V26.25H6.25V25C6.25 23.3424 6.90848 21.7527 8.08058 20.5806C9.25269 19.4085 10.8424 18.75 12.5 18.75H17.5C19.1576 18.75 20.7473 19.4085 21.9194 20.5806C23.0915 21.7527 23.75 23.3424 23.75 25V26.25H26.25Z"
                        fill="#ffffff"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Users Count
                </h1>
                <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                  {users.length}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] border p-2 bg-white rounded-3xl">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 bg-myGrey">
                  <Homecheck />
                </div>

                <h1 className="text-sm font-montserrat font-medium ">
                  Available Today
                </h1>
                <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                  {roomBooked.length}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-fit py-4  rounded-lg flex mb-4 ">
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
              <div className="flex flex-col w-full h-auto">
                <div className="grid grid-cols-3 w-full h-fit p-4 rounded-2xl bg-white justify-center items-center mb-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      className="bg-white shadow-md shadow-myGrey my-2 rounded-xl w-[85%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out">
                      <Room room={room} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
