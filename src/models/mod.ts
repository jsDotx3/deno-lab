import User from './user.model.ts';
import {dso} from "https://deno.land/x/dso@v1.0.0/mod.ts";
import config from '../../config/mod.ts';

await dso.connect(config.database);

export const userModel =  dso.define(User);