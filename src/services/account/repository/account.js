import Account from "../models/account.js";

async function getByEmail(email) {
    return Account.query().where('email', email).first();
}

export default {
    getByEmail
}