import {register} from "../../services/registration/index.js";
import toAccountJson from '../resources/account/accountResource.js';
import {AccountAlreadyExistsError} from '../../services/account/errors/index.js';
import {ProfileAlreadyExistsError} from "../../services/profile/errors/index.js";

export const registerAction = async (req, res) => {
    const {email, password, username, firstname, lastname} = req.body;
    try {
        const account = await register({
            email, password, username, firstname, lastname
        });

        res.status(200).json(toAccountJson(account)).send();
    } catch (err) {
        if (err instanceof AccountAlreadyExistsError || err instanceof ProfileAlreadyExistsError) {
            res.status(422).json({message: err.message}).send();
        }
        res.status(500).send();
    }
}