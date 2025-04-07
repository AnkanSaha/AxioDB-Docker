import Fastify from 'fastify';
import { readFile } from 'node:fs/promises';

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
  // Read the version from the version file
  const versionData = await readFile("package.json", "utf-8");
  const versionJson = JSON.parse(versionData);
  const DB_Info = {
    AxioDB_Version: versionJson.dependencies["axiodb"],
    AxioDB_Docker_Version: versionJson.version,
    Author: versionJson.author,
    WebServer: "Fastify",
    License: versionJson.license,
    Latest_Update: versionJson.Published,
  }
  return DB_Info;
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
