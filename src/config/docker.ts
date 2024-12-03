import Fastify from 'fastify';

// Create a Fastify instance
const fastify = Fastify({
  logger: true, // Enable logging
});

const PORT: number = Number(process.env.PORT) || 27018;

// Define a simple route
fastify.get('/', async (request, reply) => {
  return { message: 'Welcome to the Fastify Server!' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
