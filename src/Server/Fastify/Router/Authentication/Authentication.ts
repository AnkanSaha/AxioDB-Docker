import { FastifyInstance } from "fastify";

// Import Controllers
import Authentication from "../../../../Controller/Authentication/Authentication";

// Method to handle user Authentication management
export default function userAuthentication(
  fastify: FastifyInstance,
  options: any,
) {
  const { CentralAuthCollection } = options;
  // Route to handle user registration
  fastify.post("/register", async (request: any, reply: any) => {
    const userData = request.body;

    const result = await Authentication.Register(
      userData,
      CentralAuthCollection,
    );
    return reply.status(result.status ? 201 : 400).send(result);
  });
}
