import "./index.css";
import Login from "./screen/loginPage.js";
import Signup from "./screen/signupPage.js";
import Homescreen from "./screen/homePage.js";
import RoomList from "./screen/roomList.js";
import Homeuser from "./screen/userHome.js";
import pinjamRuang from "./screen/listRoomUser.js";
import BookingsPage from "./screen/bookingsPage.js";
import Addroom from "./screen/addroom.js";
import EditRoom from "./screen/editRoom.js";
import BookingData from "./screen/BookingData.js";
import RoomDetail from "./screen/roomDetail.js";
import BookingReq from "./screen/BookingReq.js";
import profile from "./screen/profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyBookUser from "./screen/myBookUser.js";

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/homeAdmin" exact Component={Homescreen} />
          <Route path="/" exact Component={Login} />
          <Route path="/signup" exact Component={Signup} />
          <Route path="/roomList" exact Component={RoomList} />
          <Route path="/homeUser" exact Component={Homeuser} />
          <Route path="/bookRoomList" exact Component={pinjamRuang} />
          <Route path="/bookings/:roomid" exact Component={BookingsPage} />
          <Route path="/addroom" exact Component={Addroom} />
          <Route path="/editroom/:roomid" exact Component={EditRoom} />
          <Route path="/BookingData" exact Component={BookingData} />
          <Route path="/roomDetail/:roomid" exact Component={RoomDetail} />
          <Route path="/BookingRequest" exact Component={BookingReq} />
          <Route path="/mybooking" exact Component={MyBookUser} />
          <Route path="/profile" exact Component={profile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
