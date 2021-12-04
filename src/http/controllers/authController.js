import {login} from "../../services/auth/index.js";
import toJson from '../resources/auth/accountResource.js';

export const loginAction = async (req, res) => {
    const {email, password} = req.body;
    try {
        const account = await login(email, password);
        if (!account) {
            res.status(403).json({message: 'Invalid credentials provided. Please try again later'}).send();
        }

        res.status(200).json(toJson(account)).send();
    } catch (err) {
        res.status(500).send();
    }
}