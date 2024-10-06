const express = require("express");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoutes");
const usersRoute = require("./routes/usersRoutes");

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running with nodemon"));
