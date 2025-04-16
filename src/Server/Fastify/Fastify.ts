import Fastify from 'fastify';
import ServerInfo from '../../config/Info';
import { FastifyInformation, Port } from '../../config/Keys';

// Import AxioDB for Storing the Fastify Server Related Information & Authentication
import { AxioDB } from 'axiodb';

// Create a Fastify instance
const fastify = Fastify({
  logger: true, // Enable logging
});

// Create an instance of AxioDB for storing Fastify server information & User authentication Details
const fastifyAxioDB = new AxioDB(FastifyInformation.CentralDB_Name, FastifyInformation.Custompath);

const PORT: number = Number(Port.HTTP) || 27018;

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

export default start;
