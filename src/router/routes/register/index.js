import {Router} from 'express';
import {registerAction} from "../../../http/controllers/registrationController.js";

const router = new Router();

router.post('/register', registerAction);

export default router;