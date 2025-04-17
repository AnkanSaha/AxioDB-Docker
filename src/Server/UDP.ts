import { createSocket } from "dgram";
import {ServerPorts} from "../config/Keys";

export const udpServer = () => {
  const server = createSocket("udp4");

  server.on(
    "message",
    (Command: Buffer, rinfo: { address: string; port: number }) => {
      console.log(
        `UDP Server received: ${Command.toString()} from ${rinfo.address}:${rinfo.port}`,
      );
      server.send(Command, rinfo.port, rinfo.address, (err) => {
        if (err) {
          console.error("Error sending response:", err);
        } else {
          console.log("Response sent");
        }
      });
    },
  );

  server.on("error", (err: Error) => {
    console.error(`UDP Server error: ${err.message}`);
    server.close();
  });

  server.bind(ServerPorts.UDP, () => {
    console.log(`UDP Server listening on port ${ServerPorts.UDP}`);
  });
};
