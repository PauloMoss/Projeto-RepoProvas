import { getConnectionManager } from "typeorm";

export default async function connectDatabase () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: "postgres://postgres:123456@localhost:5432/repo_provas",
    entities: ["src/Entities/*.ts"]
  });
  await connection.connect();

  return connection;
}