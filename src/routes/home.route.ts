import {Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import {index} from "../controllers/home.controller.ts";
const router = new Router();
router.get('/', index);

 export default router;