import { Application } from "denotrain/mod.ts";

import home from "./home.route.ts";
import users from "./user.route.ts";

export default (app: Application) => {
  app.use("/", home);
  app.use("/users", users);
};
