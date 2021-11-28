import {Router} from 'express';
import {default as profileRouter} from "./routes/profile/index.js";
import {default as authRouter} from "./routes/auth/index.js";
import {default as registerRouter} from "./routes/register/index.js";

const router = new Router();

router.use('/', profileRouter);
router.use('/', authRouter);
router.use('/', registerRouter);

export default router;