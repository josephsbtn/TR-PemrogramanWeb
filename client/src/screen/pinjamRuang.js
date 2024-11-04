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
        <div className="h-screen w-[25%]">
          <NavbarUser />
        </div>
        <div className="h-screen w-full flex flex-col items-center">
          <Topnav />
          <div className="flex flex-col h-screen w-full justify-center items-center">
            {loading ? (
              <Loading />
            ) : error ? (
              <h1 className="text-center w-full">Error</h1>
            ) : (
              <div className="grid grid-cols-3 w-full h-screen justify-center items-center">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white shadow-md shadow-myGrey rounded-xl w-[85%] mx-auto p-4 hover:scale-110 transition-all duration-200 ease-in-out">
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

export default PinjamRuang;
