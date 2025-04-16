// Import all Servers
import restStart from "../Server/Fastify/Fastify";
import tcpServer from "../Server/TCP";

// Import AxioDB for Storing the Fastify Server Related Information & Authentication
import { AxioDB } from "axiodb";
import { CentralInformation } from "./Keys";

const main = async () => {
    const centralAxioDBInstance: AxioDB = new AxioDB(CentralInformation.CentralDB_InstanceName, ".");
    const centralDB = await centralAxioDBInstance.createDB(CentralInformation.CentralDB_Name);
    const centralAuthCollection = await centralDB.createCollection(CentralInformation.CentralDB_Collection_Auth, CentralInformation.CentralDB_Auth_UserCollection_Schema);

    /// Run the server
    restStart({
        CentralAuthCollection: centralAuthCollection,
        CentralDB: centralDB,
        CentralDBInstance: centralAxioDBInstance,
    });
    tcpServer({
        CentralAuthCollection: centralAuthCollection,
        CentralDB: centralDB,
        CentralDBInstance: centralAxioDBInstance,
    });
};

main();
