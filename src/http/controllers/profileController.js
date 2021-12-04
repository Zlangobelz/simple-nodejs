import toJson from '../resources/account/accountResource.js';

export async function getMeAction(req, res) {
    return res.status(200).json(toJson(req.account)).send();
}