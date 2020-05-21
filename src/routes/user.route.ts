import { Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import { index, create } from "../controllers/user.controller.ts";
const router = new Router();

router.get("/", index);
router.post("/", create);

export default router;