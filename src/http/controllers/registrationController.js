import {register} from "../../services/registration/index.js";
import toJson from '../resources/auth/accountResource.js';
import {AccountAlreadyExistsError} from '../../services/account/errors/index.js';
import {ProfileAlreadyExistsError} from "../../services/profile/errors/index.js";

export const registerAction = async (req, res) => {
    const {email, password, username, firstname, lastname} = req.body;
    try {
        const account = await register({
            email, password, username, firstname, lastname
        });

        res.status(200).json(toJson(account)).send();
    } catch (err) {
        if (err instanceof AccountAlreadyExistsError || err instanceof ProfileAlreadyExistsError) {
            res.status(422).json({message: err.message}).send();
        }
        res.status(500).send();
    }
}