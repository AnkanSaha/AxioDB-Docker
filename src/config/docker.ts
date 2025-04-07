import Fastify from 'fastify';
import ServerInfo from './Info';

// Create a Fastify instance
const fastify = Fastify({
  logger: true, // Enable logging
});

const PORT: number = Number(process.env.PORT) || 27018;

// Define a simple important route
fastify.get('/', async (_request: any, _reply: any) => {
  return { message: 'Hello, from AxioDB Docker Container' };
});

fastify.get('/health', async (_request: any, _reply: any) => {
  return { status: 'OK' };
});
fastify.get('/status', async (_request: any, _reply: any) => {
  return { status: `Running on port ${PORT}` };
});

// Define a route to get the version information
fastify.get('/info', async(_request: any, _reply:any)=> {
  const { DB_Info, OS_Info, Runtime_Info } = await ServerInfo();
  return { DB_Info, OS_Info, Runtime_Info };
})
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
