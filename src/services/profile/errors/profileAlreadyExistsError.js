export default class ProfileAlreadyExistsError extends Error {
    constructor(username) {
        super(`Profile with username ${username} already exists`);
        this.name = "ProfileAlreadyExistsError";
    }
}