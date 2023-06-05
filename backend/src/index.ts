import environment from "./server/loadEnviroment.js";
import debugCreator from "debug";
import startServer from "./server/startServer.js";
import app from "./server/app.js";

const debug = debugCreator("app:server");

const { port } = environment;

await startServer(app, +port);
debug(`Server started at port ${port}`);
