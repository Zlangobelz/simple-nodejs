import Profile from "./models/profile.js";
import profileRepository from "./repositories/profile.js";
import {ProfileAlreadyExistsError} from './errors/index.js';

export async function create({firstname, lastname, username}, trx) {
    if (await getByUsername(username)) {
        throw new ProfileAlreadyExistsError(username);
    }

    return Profile.query(trx).insert({firstname, lastname, username});
}

export async function getByUsername(username) {
    return profileRepository.getByUsername(username);
}

export async function getById(id) {
    return profileRepository.getById(id);
}