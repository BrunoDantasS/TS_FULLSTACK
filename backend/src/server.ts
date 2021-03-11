import { app } from "./app";

const PORT = 3333;

const server = app.listen(PORT, () => console.log(`[App connected to port ${PORT}]`));

process.on('SIGINT', () => {
    server.close();
    console.log(`[App disconnected to port ${PORT}]`);
});