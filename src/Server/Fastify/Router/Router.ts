import { FastifyInstance } from "fastify";
import userAuthentication from "./Authentication/Authentication";

// Main Service Routes to link all the routes to the main service
export default function MainServiceRoutes(
  fastify: FastifyInstance,
  options: any,
) {
  const { DBInstances } = options;

  // Register the Authentication routes
  fastify.register(userAuthentication, {
    prefix: "/auth",
    CentralAuthCollection: DBInstances.CentralAuthCollection,
  });
}
