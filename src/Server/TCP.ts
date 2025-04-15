// Import TCP Server Configuration
import net from "node:net";
import { Port } from "../config/Keys";
const PORT: number = Number(Port.TCP) || 27018;

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log("Received from client:", data.toString());
    socket.write(`Echo: ${data}`);
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error("Socket Error:", err.message);
  });
});

const tcpServer = async () => {
  server.listen(PORT, () => {
    console.log(`TCP Server listening on port ${PORT}`);
  });
};

export default tcpServer;
