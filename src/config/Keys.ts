import { SchemaTypes } from "axiodb";

export enum ServerPorts {
  HTTP = 27018,
  TCP = 27019,
  GRPC = 27020,
  WEBSOCKET = 27021,
  UDP = 27022,
}

export const CentralInformation = {
  CentralDB_InstanceName: "AxioDB_Central_Information",
  CentralDB_Name: "AxioDB_Central_DB",
  CentralDB_Collection_Auth: "AxioDB_Central_Collection_Auth",
  CentralDB_Auth_UserCollection_Schema: {
    name: SchemaTypes.string().required(),
    email: SchemaTypes.string().required(),
    username: SchemaTypes.string().required(),
    password: SchemaTypes.string().required(),
  },
};
