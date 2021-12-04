import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {getByEmail} from "../account/index.js";
import {getById} from "../profile/index.js";

export async function login(email, password) {
    const account = await getByEmail(email);
    if (!account) {
        return null;
    }

    if (!await bcrypt.compare(password, account.password)) {
        return null;
    }

    account.profile = await getById(account.profile_id);
    account.token = generateJWTToken(email);

    return account;
}

export async function getByToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        const account = await getByEmail(decoded.email);
        if (!account) {
            return null;
        }
        account.profile = await getById(account.profile_id);

        return account;
    } catch (e) {
        return null;
    }
}

export function generateJWTToken(email) {
    return jwt.sign(
        {email},
        process.env.JWT_TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    )
}