import Profile from "../models/profile.js";

async function getByUsername(username) {
    return Profile.query().where('username', username).first();
}

export default {
    getByUsername
}