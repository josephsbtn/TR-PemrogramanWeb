import React from "react";
import moment from "moment";

function ItemBook({ bookings }) {
  return (
    <div className="w-full h-fit p-4 flex border-opacity-50 items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-montserrat font-bold text-myBlue">
          {bookings.roomid.roomName}
        </h1>
      </div>

      <div className="flex flex-col justify-around space-y-1">
        <p className="text-sm font-montserrat">
          <strong>Nama Peminjam : </strong>
          {bookings.userid.username.toUpperCase()}
        </p>
        <p className="text-sm font-montserrat">
          <strong>Tanggal Pinjam : </strong>{" "}
          {moment(bookings.startDate).format("DD-MM-YYYY")}
        </p>
        <p className="text-sm font-montserrat ">
          <strong>Waktu Pinjam : </strong> {bookings.startTime} -{" "}
          {bookings.endTime}
        </p>
      </div>
    </div>
  );
}

export default ItemBook;
