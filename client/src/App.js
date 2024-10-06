import "./index.css";
import Login from "./screen/loginPage.js";
import Signup from "./screen/signupPage.js";
import Homescreen from "./screen/homePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/homeAdmin" element={<Homescreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
