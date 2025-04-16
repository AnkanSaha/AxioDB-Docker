// Import TCP Server Configuration
import net from "node:net";
import { Port, TCPInformation } from "../config/Keys";
const PORT: number = Number(Port.TCP) || 27018;

// Import AxioDB for Storing the Fastify Server Related Information & Authentication
import { AxioDB } from 'axiodb';


const tcpAxioDB = new AxioDB(TCPInformation.CentralDB_Name, TCPInformation.Custompath);

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (Command: string) => {
    console.log("Received from client:", Command.toString());
    socket.write(`Echo: ${Command}`);
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err: Error) => {
    console.error("Socket Error:", err.message);
  });
});

const tcpServer = async () => {
  server.listen(PORT, () => {
    console.log(`TCP Server listening on port ${PORT}`);
  });
};

export default tcpServer;
