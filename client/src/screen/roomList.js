import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Topnav from "../components/topnav";
import Room from "../components/room";
import { Link } from "react-router-dom";
import axios from "axios";

function RoomList() {
  const [rooms, SetRooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        console.log("data :", data);
        SetRooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    };
    fetchRooms();
    return () => {};
  }, []);
  return (
    <>
      <section className="flex justify-between h-[2000px] w-full bg-anotherGrey ">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>
        <div className="h-screen w-full">
          <Topnav />
          <div className="flex flex-col h-screen w-full justify-center items-center">
            <div className="grid grid-cols-3 w-full h-screen justify-center items-center">
              {loading ? (
                <h1 className="text-center w-full flex justify-center items-center h-full">
                  loading...
                </h1>
              ) : error ? (
                <h1 className="text-center w-full">error</h1>
              ) : (
                rooms.map((room) => {
                  return (
                    <div className="bg-white  shadow-md shadow-myGrey rounded-xl w-[85%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out">
                      <Room room={room} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomList;
