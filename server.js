const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

let arr = [];
let playingArray = [];

io.on("connection", (socket) => {
  socket.on("find", (e) => {
    if (e.name) {
      arr.push(e.name);

      if (arr.length >= 2) {
        let p1obj = {
          p1name: arr[0],
          p1value: "X",
          p1move: ""
        };
        let p2obj = {
          p2name: arr[1],
          p2value: "O",
          p2move: ""
        };

        let obj = {
          p1: p1obj,
          p2: p2obj,
          sum: 1
        };

        playingArray.push(obj);
        arr.splice(0, 2);

        io.emit("find", { allPlayers: playingArray });
      }
    }
  });

  socket.on("playing", (e) => {
    let objToChange;
    if (e.value === "X") {
      objToChange = playingArray.find((obj) => obj.p1.p1name === e.name);
    } else if (e.value === "O") {
      objToChange = playingArray.find((obj) => obj.p2.p2name === e.name);
    }

    if (objToChange) {
      objToChange.sum++;
      if (e.value === "X") {
        objToChange.p1.p1move = e.id;
      } else if (e.value === "O") {
        objToChange.p2.p2move = e.id;
      }
      io.emit("playing", { allPlayers: playingArray });
    }
  });

  socket.on("gameOver", (e) => {
    playingArray = playingArray.filter(
      (obj) => obj.p1.p1name !== e.name && obj.p2.p2name !== e.name
    );
  });
});

// Route for serving index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
