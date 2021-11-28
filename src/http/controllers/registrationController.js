import {register} from "../../services/registration/index.js";
import toAccountJson from '../resources/account/accountResource.js';

export const registerAction = async (req, res) => {
    const {email} = req.body;
    try {
        const account = await register({
            email: email
        });

        res.status(200).json(toAccountJson(account)).send();
    } catch (err) {
        res.status(500).send();
    }
}