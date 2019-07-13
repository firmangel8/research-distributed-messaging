const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

let increment = 1;
const getApiAndEmit = async socket => {
  try {
        
        // Getting the data from DarkSky
        const d = Math.random();
        // Emitting a new message. It will be consumed by the client
        // socket.emit("FromAPI", res.data.currently.temperature);
        socket.emit("FromAPI", d);
        console.log(
          "transmit => " + d + " |> STATUS: SUCCESS",
          ", Seq: " + increment++,
          ", time interval: 5ms"
        );
        
        
        
      } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

let interval;

io.on("connection", socket => {
  console.log("New client connected");
  console.log("Interval publish: 5ms")
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 5);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));