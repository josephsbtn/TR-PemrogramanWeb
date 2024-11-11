import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Topnav from "../components/topnav";
import Room from "../components/room";
import { Link } from "react-router-dom";
import Loading from "../components/loadingSpinner";
import axios from "axios";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    fetchRooms();
    return () => {};
  }, []);

  return (
    <>
      <section className="flex justify-between h-[2000px] w-full bg-anotherGrey">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>
        <div className="h-screen w-full flex flex-col items-center">
          <Topnav />
          <div className=" z-10 fixed bottom-4 right-4  ">
            <Link to={"/addroom"}>
              <div className="flex p-4 bg-myBlue justify-center items-center rounded-lg hover:bg-myBlue/80">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi:home-plus">
                    <path
                      id="Vector"
                      d="M21.25 17.5H23.75V21.25H27.5V23.75H23.75V27.5H21.25V23.75H17.5V21.25H21.25V17.5ZM15 3.75L27.5 15H22.5C21.3003 15.0008 20.1183 15.2891 19.053 15.8408C17.9877 16.3925 17.0701 17.1915 16.3772 18.1709C15.6843 19.1503 15.2362 20.2814 15.0706 21.4696C14.9049 22.6578 15.0264 23.8684 15.425 25H6.25V15H2.5L15 3.75Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <h1 className="text-white font-montserrat font-bold ml-2">
                  Add Room
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex flex-col h-screen w-full justify-center items-center">
            {loading ? (
              <Loading />
            ) : error ? (
              <h1 className="text-center w-full">Error</h1>
            ) : (
              <div className="grid grid-cols-3 w-full h-screen mt-10">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white h-fit shadow-md shadow-myGrey rounded-xl my-5 w-[85%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out"
                  >
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

export default RoomList;
