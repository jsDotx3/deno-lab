import {Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
const router = new Router();
router
.get('/' ,  () => {
    return {data: 'Welcome to Deno Lab'};
 });

 export default router;