import Fastify from "fastify";
import ServerInfo from "../../config/Info";
import { ServerPorts } from "../../config/Keys";
import { AxioDB } from "axiodb";
import Collection from "axiodb/lib/Operation/Collection/collection.operation";
import Database from "axiodb/lib/Operation/Database/database.operation";

// Import all Routes
import MainServiceRoutes from "./Router/Router";
import fastifyRateLimit from "@fastify/rate-limit";

// Interface
interface ServerOptions {
  CentralAuthCollection: Collection;
  CentralDB: Database;
  CentralDBInstance: AxioDB;
}

// Start the server
const start = async (options?: ServerOptions) => {
  // Create a Fastify instance
  const fastify = Fastify({
    logger: true, // Enable logging
  });

  const PORT: number = Number(ServerPorts.HTTP) || 27018;

  await fastify.register(fastifyRateLimit, {
    max: 100, // Max number of requests
    timeWindow: "1 minute", // Time window for the max
    errorResponseBuilder: function (req, context) {
      return {
        statusCode: 429,
        error: "Too Many Requests",
        message: `You have reached the limit of ${context.max} requests in ${context.after}. Try again later.`,
      };
    },
  });

  // Register routes with a prefix
  fastify.register(MainServiceRoutes, {
    prefix: "/services",
    DBInstances: options,
  });

  // Define a simple important route
  fastify.get("/", async (_request: any, _reply: any) => {
    return { message: "Hello, from AxioDB Docker Container" };
  });

  fastify.get("/health", async (_request: any, _reply: any) => {
    return { status: "OK" };
  });
  fastify.get("/status", async (_request: any, _reply: any) => {
    return { status: `Running on port ${PORT}` };
  });

  // Define a route to get the version information
  fastify.get("/info", async (_request: any, _reply: any) => {
    const { DB_Info, OS_Info, Runtime_Info } = await ServerInfo();
    return { DB_Info, OS_Info, Runtime_Info };
  });

  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`REST API Server is running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
  }
};

export default start;
