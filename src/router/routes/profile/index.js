import {Router} from 'express';
import authenticate from "../../../http/middlewares/authenticate.js";
import {getMeAction} from "../../../http/controllers/profileController.js";

const router = new Router();

router.get('/get', authenticate, getMeAction);

export default router;