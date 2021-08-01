import { getConnectionManager } from "typeorm";
import './setup';

export default async function connectDatabase () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["src/Entities/*.ts"]
  });

  await connection.connect();

  return connection;
}