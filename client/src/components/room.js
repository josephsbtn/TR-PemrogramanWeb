import React from "react";

function Room({ room }) {
  return (
    <div className="flex flex-col justify-start items-start">
      <img
        src={room.image[0]}
        className="w-full h-40 object-cover my-2 rounded-xl"
      />
      <h1 className="text-myBlue font-montserrat font-bold">{room.name}</h1>
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
    </div>
  );
}

export default Room;
