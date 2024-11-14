import axios from "axios";
import Room from "../components/room";
import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import Navbar from "../components/navbar";
import Datepicker from "react-tailwindcss-datepicker";
import { Link, useParams } from "react-router-dom";

function BookingsPage({ match }) {
  const { roomid } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [surat, setSurat] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function convertBase64(e) {
    const file = e.target.files[0];
    if (!file) {
      setError(true);
      console.log("No File Selected");
      return false;
    }
    const validFileTypes = ["file/pdf", "file/docs"];
    if (!validFileTypes.includes(file.type)) {
      setError(true);
      console.log("Invalid file type. Only pdf and docs files are allowed.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError(true);
      console.log("File is too large. Maximum file size is 2MB.");
      return;
    }
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        setSurat(reader.result);
      };
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const SubmitBooking = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="flex h-screen w-full bg-anotherGrey ">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>

        <div className="w-full h-auto flex flex-col items-center">
          <Topnav />
          <div className="w-[90%] rounded-3xl h-auto my-6 flex flex-col justify-center items-center p-4 bg-white">
            <h1 className="font-montserrat font-medium text-lg">
              Booking Room
            </h1>

            <form onSubmit={SubmitBooking}></form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingsPage;
