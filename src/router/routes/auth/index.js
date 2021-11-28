import {Router} from 'express';

const router = new Router();

//TODO: change to post
router.get('/login', function (req, res) {
    res.send('Login route');
});

export default router;