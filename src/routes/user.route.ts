import models from '../models/index.ts';
import {Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
const router = new Router();

router
    .get("/", async () => {
        const data = await models.user_model.findAll({});
        return {data}
    })
    .post('/', async(ctx) => {
        const {body} = await ctx.req;
        const insertRecord = await models.user_model.insert(body);
        if(insertRecord){
            const data = await models.user_model.findById(insertRecord);
            return {data};
        }

        throw new Error('Error create user');
    })
  ;

  export default router;