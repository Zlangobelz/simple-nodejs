import {Router} from 'express';
import {loginAction} from "../../../http/controllers/authController.js";

const router = new Router();

router.post('/login', loginAction);

export default router;