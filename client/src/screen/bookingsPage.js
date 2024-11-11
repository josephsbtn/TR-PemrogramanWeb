import axios from "axios";
import Room from "../components/room";
import React, { useEffect, useState } from "react";
import Topnav from "../components/topnav";
import Navbar from "../components/navbar";
import { Link, useParams } from "react-router-dom";

function BookingsPage({ match }) {
  const { roomid } = useParams();
  const [rooms, setRooms] = useState();
  const [image, setImage] = useState("");
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/rooms/getallroomsID", {
          roomid,
        });
      } catch (error) {
        console.error("Error fetching room:", error);
        setError("Failed to load room data.");
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [roomid]);
  return (
      <>
      <section className="flex h-screen w-full bg-anotherGrey ">
        <nav className="h-screen w-[25%]">
          <Navbar />
        </nav>

        <div className="w-full flex flex-col items-center">
          <Topnav />

          <div className="flex justify-center my-9 w-full">
            {/* dynamic content */}
            <div className="flex w-[80%] h-fit justify-around items-center">
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] p-2 border bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 ">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.6666 10.4166C16.6666 8.75902 17.3251 7.16931 18.4972 5.99721C19.6693 4.82511 21.259 4.16663 22.9166 4.16663H39.5833C41.2409 4.16663 42.8306 4.82511 44.0027 5.99721C45.1748 7.16931 45.8333 8.75902 45.8333 10.4166V39.5833C45.8333 41.2409 45.1748 42.8306 44.0027 44.0027C42.8306 45.1748 41.2409 45.8333 39.5833 45.8333H22.9166C21.259 45.8333 19.6693 45.1748 18.4972 44.0027C17.3251 42.8306 16.6666 41.2409 16.6666 39.5833V10.4166ZM22.9166 8.33329C22.3641 8.33329 21.8342 8.55279 21.4435 8.94349C21.0528 9.33419 20.8333 9.86409 20.8333 10.4166V39.5833C20.8333 40.1358 21.0528 40.6657 21.4435 41.0564C21.8342 41.4471 22.3641 41.6666 22.9166 41.6666H39.5833C40.1358 41.6666 40.6657 41.4471 41.0564 41.0564C41.4471 40.6657 41.6666 40.1358 41.6666 39.5833V10.4166C41.6666 9.86409 41.4471 9.33419 41.0564 8.94349C40.6657 8.55279 40.1358 8.33329 39.5833 8.33329H22.9166Z"
                      fill="#5863F8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.16663 22.9166C4.16663 21.259 4.82511 19.6693 5.99721 18.4972C7.16931 17.3251 8.75902 16.6666 10.4166 16.6666H19.7916V20.8333H10.4166C9.86409 20.8333 9.33419 21.0528 8.94349 21.4435C8.55279 21.8342 8.33329 22.3641 8.33329 22.9166V39.5833C8.33329 40.1358 8.55279 40.6657 8.94349 41.0564C9.33419 41.4471 9.86409 41.6666 10.4166 41.6666H30.2083V45.8333H10.4166C8.75902 45.8333 7.16931 45.1748 5.99721 44.0027C4.82511 42.8306 4.16663 41.2409 4.16663 39.5833V22.9166Z"
                      fill="#5863F8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25 35.4167C25 34.3116 25.439 33.2518 26.2204 32.4704C27.0018 31.689 28.0616 31.25 29.1667 31.25H33.3333C34.4384 31.25 35.4982 31.689 36.2796 32.4704C37.061 33.2518 37.5 34.3116 37.5 35.4167V41.6667H33.3333V35.4167H29.1667V41.6667H25V35.4167Z"
                      fill="#5863F8"
                    />
                    <path
                      d="M25 12.5C25 11.9474 25.2195 11.4175 25.6102 11.0268C26.0009 10.6361 26.5308 10.4166 27.0833 10.4166C27.6358 10.4166 28.1657 10.6361 28.5564 11.0268C28.9471 11.4175 29.1666 11.9474 29.1666 12.5V14.5833C29.1666 15.1358 28.9471 15.6657 28.5564 16.0564C28.1657 16.4471 27.6358 16.6666 27.0833 16.6666C26.5308 16.6666 26.0009 16.4471 25.6102 16.0564C25.2195 15.6657 25 15.1358 25 14.5833V12.5ZM25 22.9166C25 22.3641 25.2195 21.8342 25.6102 21.4435C26.0009 21.0528 26.5308 20.8333 27.0833 20.8333C27.6358 20.8333 28.1657 21.0528 28.5564 21.4435C28.9471 21.8342 29.1666 22.3641 29.1666 22.9166V25C29.1666 25.5525 28.9471 26.0824 28.5564 26.4731C28.1657 26.8638 27.6358 27.0833 27.0833 27.0833C26.5308 27.0833 26.0009 26.8638 25.6102 26.4731C25.2195 26.0824 25 25.5525 25 25V22.9166ZM10.4166 31.25C10.4166 30.6974 10.6361 30.1675 11.0268 29.7768C11.4175 29.3861 11.9474 29.1666 12.5 29.1666C13.0525 29.1666 13.5824 29.3861 13.9731 29.7768C14.3638 30.1675 14.5833 30.6974 14.5833 31.25V33.3333C14.5833 33.8858 14.3638 34.4157 13.9731 34.8064C13.5824 35.1971 13.0525 35.4166 12.5 35.4166C11.9474 35.4166 11.4175 35.1971 11.0268 34.8064C10.6361 34.4157 10.4166 33.8858 10.4166 33.3333V31.25ZM33.3333 12.5C33.3333 11.9474 33.5528 11.4175 33.9435 11.0268C34.3342 10.6361 34.8641 10.4166 35.4166 10.4166C35.9692 10.4166 36.4991 10.6361 36.8898 11.0268C37.2805 11.4175 37.5 11.9474 37.5 12.5V14.5833C37.5 15.1358 37.2805 15.6657 36.8898 16.0564C36.4991 16.4471 35.9692 16.6666 35.4166 16.6666C34.8641 16.6666 34.3342 16.4471 33.9435 16.0564C33.5528 15.6657 33.3333 15.1358 33.3333 14.5833V12.5ZM33.3333 22.9166C33.3333 22.3641 33.5528 21.8342 33.9435 21.4435C34.3342 21.0528 34.8641 20.8333 35.4166 20.8333C35.9692 20.8333 36.4991 21.0528 36.8898 21.4435C37.2805 21.8342 37.5 22.3641 37.5 22.9166V25C37.5 25.5525 37.2805 26.0824 36.8898 26.4731C36.4991 26.8638 35.9692 27.0833 35.4166 27.0833C34.8641 27.0833 34.3342 26.8638 33.9435 26.4731C33.5528 26.0824 33.3333 25.5525 33.3333 25V22.9166Z"
                      fill="#5863F8"
                    />
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Ruangan Tersedia
                </h1>
                {/* <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                {rooms.length}
              </h1> */}
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] border p-2 bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 ">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_249_54)">
                      <path
                        d="M7.09125 0C7.32331 0 7.54587 0.129062 7.70997 0.358794C7.87406 0.588526 7.96625 0.90011 7.96625 1.225V3.51575H17.3625V1.24075C17.3625 0.91586 17.4547 0.604276 17.6188 0.374544C17.7829 0.144812 18.0054 0.01575 18.2375 0.01575C18.4696 0.01575 18.6921 0.144812 18.8562 0.374544C19.0203 0.604276 19.1125 0.91586 19.1125 1.24075V3.51575H22.5C23.1628 3.51575 23.7985 3.88426 24.2673 4.54026C24.7361 5.19626 24.9997 6.08605 25 7.014V31.5017C24.9997 32.4297 24.7361 33.3195 24.2673 33.9755C23.7985 34.6315 23.1628 35 22.5 35H2.5C1.83718 35 1.20148 34.6315 0.732675 33.9755C0.26387 33.3195 0.000331412 32.4297 0 31.5017L0 7.014C0.000331412 6.08605 0.26387 5.19626 0.732675 4.54026C1.20148 3.88426 1.83718 3.51575 2.5 3.51575H6.21625V1.22325C6.21658 0.898663 6.30891 0.587529 6.47297 0.358175C6.63703 0.128822 6.8594 -3.31211e-07 7.09125 0ZM1.75 13.5485V31.5017C1.75 31.6396 1.7694 31.7762 1.80709 31.9036C1.84478 32.031 1.90003 32.1467 1.96967 32.2442C2.03931 32.3417 2.12199 32.4191 2.21299 32.4718C2.30398 32.5246 2.40151 32.5518 2.5 32.5518H22.5C22.5985 32.5518 22.696 32.5246 22.787 32.4718C22.878 32.4191 22.9607 32.3417 23.0303 32.2442C23.1 32.1467 23.1552 32.031 23.1929 31.9036C23.2306 31.7762 23.25 31.6396 23.25 31.5017V13.573L1.75 13.5485ZM8.33375 25.5833V28.4987H6.25V25.5833H8.33375ZM13.5413 25.5833V28.4987H11.4587V25.5833H13.5413ZM18.75 25.5833V28.4987H16.6663V25.5833H18.75ZM8.33375 18.6235V21.539H6.25V18.6235H8.33375ZM13.5413 18.6235V21.539H11.4587V18.6235H13.5413ZM18.75 18.6235V21.539H16.6663V18.6235H18.75ZM6.21625 5.964H2.5C2.40151 5.964 2.30398 5.99116 2.21299 6.04393C2.12199 6.09669 2.03931 6.17404 1.96967 6.27154C1.90003 6.36904 1.84478 6.48479 1.80709 6.61218C1.7694 6.73957 1.75 6.87611 1.75 7.014V11.1003L23.25 11.1248V7.014C23.25 6.87611 23.2306 6.73957 23.1929 6.61218C23.1552 6.48479 23.1 6.36904 23.0303 6.27154C22.9607 6.17404 22.878 6.09669 22.787 6.04393C22.696 5.99116 22.5985 5.964 22.5 5.964H19.1125V7.58975C19.1125 7.91464 19.0203 8.22622 18.8562 8.45596C18.6921 8.68569 18.4696 8.81475 18.2375 8.81475C18.0054 8.81475 17.7829 8.68569 17.6188 8.45596C17.4547 8.22622 17.3625 7.91464 17.3625 7.58975V5.964H7.96625V7.574C7.96625 7.89889 7.87406 8.21047 7.70997 8.44021C7.54587 8.66994 7.32331 8.799 7.09125 8.799C6.85919 8.799 6.63663 8.66994 6.47253 8.44021C6.30844 8.21047 6.21625 7.89889 6.21625 7.574V5.964Z"
                        fill="#5863F8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_249_54">
                        <rect width="25" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Total Peminjaman
                </h1>
                {/* <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                {users.length}
              </h1> */}
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] p-2 border bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 ">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L22.5 22.5M22.5 17.5L17.5 22.5"
                      stroke="#344054"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6664 5H30C30.442 5 30.8658 5.17557 31.1783 5.48808C31.4909 5.80059 31.6664 6.22444 31.6664 6.6664V33.3336C31.6664 33.7756 31.4909 34.1994 31.1783 34.5119C30.8658 34.8244 30.442 35 30 35H10C9.55806 35 9.13421 34.8244 8.8217 34.5119C8.50919 34.1994 8.33362 33.7756 8.33362 33.3336V8.3336M11.6664 5L8.33362 8.3336M11.6664 5V8.3336H8.33362"
                      stroke="#306CFE"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Peminjaman Ditolak
                </h1>
                {/* <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                {rooms.length}
              </h1> */}
              </div>
              <div className="flex flex-col justify-center items-center w-[20%] h-[100%] p-2 border bg-white rounded-3xl shadow-md">
                <div className=" flex justify-center items-center p-3 rounded-2xl m-2 ">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5 29.2914L31.167 32.375L38.5 26.2086M31.167 4.625H11C10.5139 4.625 10.0476 4.7874 9.70388 5.07647C9.36012 5.36554 9.16699 5.75761 9.16699 6.16642V13.875H16.5L20.167 16.9586H34.8331V7.70858M31.167 4.625L34.8331 7.70858M31.167 4.625V7.70858H34.8331"
                      stroke="#344054"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.167 32.375H7.33304C6.84689 32.375 6.38065 32.2126 6.03688 31.9235C5.69312 31.6345 5.5 31.2424 5.5 30.8336V15.4164C5.5 15.0076 5.69312 14.6155 6.03688 14.3265C6.38065 14.0374 6.84689 13.875 7.33304 13.875H16.5L20.167 16.9586H36.667C37.1531 16.9586 37.6194 17.121 37.9631 17.4101C38.3069 17.6991 38.5 18.0912 38.5 18.5V20.0414"
                      stroke="#306CFE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-sm font-montserrat font-medium ">
                  Permintaan Disetujui
                </h1>
                {/* <h1 className="text-2xl font-montserrat font-bold text-myBlue border-b-2 px-2 border-myGrey">
                {rooms.length}
              </h1> */}
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[20%] py-4 bg-white flex "></div>
        </div>
      </section>
    </>
  );
}

export default BookingsPage;
