import 'dotenv/config';
import { app } from "./app";
import { Server } from "http";
import { connectToDatabase } from "./database/database";

const port: string = process.env.PORT || "3000";

connectToDatabase();

const server: Server = app.listen(port, () =>
  console.log(`Application running on port ${port}`)
);

process.on("SIGINT", () => {
  server.close();
  console.log("Finished Application");
});
