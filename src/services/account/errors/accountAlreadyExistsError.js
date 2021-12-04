export default class AccountAlreadyExistsError extends Error {
    constructor(email) {
        super(`Account with email ${email} already exists`);
        this.name = "AccountAlreadyExistsError";
    }
}