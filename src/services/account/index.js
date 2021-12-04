import bcrypt from 'bcrypt';
import Account from "./models/account.js";
import {AccountAlreadyExistsError} from './errors/index.js';
import accountRepository from "./repository/account.js";

export async function create({email, password}, trx) {
    if (await getByEmail(email)) {
        throw new AccountAlreadyExistsError(email);
    }
    const encrypted = await hashPassword(password);

    return Account.query(trx).insert({email, password: encrypted});
}

export async function setProfile({email, profileId}, trx) {
    return Account.query(trx).patch({profile_id: profileId}).where('email', email);
}

export async function getByEmail(email) {
    //TODO: is this good practice?
    return accountRepository.getByEmail(email);
}

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
}