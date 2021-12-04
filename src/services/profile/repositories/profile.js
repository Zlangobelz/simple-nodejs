import Profile from "../models/profile.js";

async function getByUsername(username) {
    return Profile.query().where('username', username).first();
}

async function getById(id) {
    return Profile.query().where('id', id).first();
}

export default {
    getByUsername,
    getById
}