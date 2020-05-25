import { Application } from "denotrain/mod.ts";
import { JsonError } from "denotrain/middleware/json-error/mod.ts";
import { TrainLogger } from "denotrain/middleware/request-logger/mod.ts";
import middlewares from "./src/middlewares/mod.ts";
import loadRoutes from "./src/routes/mod.ts";
import config from "./config/mod.ts";

const app = new Application(config.server);
app.use(new TrainLogger());
app.use(new JsonError(true));
app.use(middlewares.timing);
loadRoutes(app);


await app.run();
