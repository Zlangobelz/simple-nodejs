import {getByToken} from "../../services/auth/index.js";

export default async function (req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({message: "A token is required for authentication"});
    }

    try {
        const account = await getByToken(token);
        if (!account) {
            throw new Error();
        }
        req.account = account;

    } catch (err) {
        console.log(err)
        return res.status(403).send({message: "Invalid Token"});
    }

    return next();
}