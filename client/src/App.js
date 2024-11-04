import "./index.css";
import Login from "./screen/loginPage.js";
import Signup from "./screen/signupPage.js";
import Homescreen from "./screen/homePage.js";
import RoomList from "./screen/roomList.js";
import Homeuser from "./screen/userHome.js";
import pinjamRuang from "./screen/pinjamRuang.js";
import BookingsPage from "./screen/bookingsPage.js";
import Addroom from "./screen/addroom.js";
import EditRoom from "./screen/editRoom.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/pinjamRuang" exact Component={pinjamRuang} />
          <Route path="/booking/:roomid" exact Component={BookingsPage} />
          <Route path="/addroom" exact Component={Addroom} />
          <Route path="/editroom/:roomid" exact Component={EditRoom} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
