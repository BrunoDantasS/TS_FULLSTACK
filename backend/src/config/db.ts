// Manage database connection

import { createConnection } from "typeorm";

export const connectServerDataBase = async () => {
  const connection = await createConnection();
  const { database } = connection.options;
  
  console.log(`[App connected to ${database}]`);

  process.on('SIGINT', () => {
    connection.close().then(() => console.log(`[App disconnected to ${database}]`))
  });
}