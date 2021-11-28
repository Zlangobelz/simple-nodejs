import {Router} from 'express';

const router = new Router();

router.get('/get', function (req, res) {
    res.send('Get me route');
});

export default router;