import {Router } from "denotrain/mod.ts";
import {index} from "../controllers/home.controller.ts";
const router = new Router();
router.get('/', index);

 export default router;