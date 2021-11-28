import {create as createAccount} from "../account/index.js";

export async function register(user) {
    createAccount(user.email, user.password).then((account) => {
        return account;
    })
}