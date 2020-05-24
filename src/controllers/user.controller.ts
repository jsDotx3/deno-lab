import { userModel } from "../models/mod.ts";
import { all, store } from "../helpers/crud.helper.ts";
export const index = async () => await all(userModel);
export const create = await store(userModel);
export const update = () => {};
export const destroy = () => {};
