import { Router } from "denotrain/mod.ts";
import { index, create } from "../controllers/user.controller.ts";
const router = new Router();

router.get("/", index);
router.post("/", create);

export default router;