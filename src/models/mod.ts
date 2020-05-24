import User from "./user.model.ts";
import { dso } from "dso/mod.ts";
import config from "../../config/mod.ts";

await dso.connect(config.database);

export const userModel = dso.define(User);
