import environment from "./server/loadEnviroment.js";
import debugCreator from "debug";
import startServer from "./server/startServer.js";
import app from "./server/app.js";
import { connectDb } from "./dataBase/index.js";

const debug = debugCreator("app:server");

const { port, mongoDbUrl } = environment;

await connectDb(mongoDbUrl);
debug("Connected to database");
await startServer(app, +port);
debug(`Server started at port ${port}`);
