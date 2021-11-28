import Account from "./models/account.js";

export async function create(email, password) {
    let existing = await getByEmail(email);
    if (existing) {
        throw new Error(`Account with email ${email} already exists`);
    }

    return Account.query().insert({email: email, password: password});
}

export async function getByEmail(email) {
    return Account.query().where('email', email).first();
}