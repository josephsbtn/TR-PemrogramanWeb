import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <Link
        to={user.isAdmin ? `/editroom/${room._id}` : `/booking/${room._id}`}
        className="flex flex-col justify-start items-start">
        <img
          src={room.image}
          className="w-full h-40 object-cover my-2 rounded-xl"
        />
        <h1 className="text-myBlue font-montserrat font-bold">
          {room.roomName}
        </h1>
        <h1 className="text-myBlue font-montserrat font-medium text-sm">
          Capacity : {room.capacity}
        </h1>
        <p className="text-myGrey font-montserrat font-medium text-sm">
          Status :{" "}
          {room.statusDipinjam ? (
            "Dipinjam"
          ) : (
            <span className="text-myBlue font-bold">Tersedia</span>
          )}
        </p>
      </Link>
    </>
  );
}

export default Room;
