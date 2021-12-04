import {create as createAccount, setProfile as setAccountProfile} from "../account/index.js";
import {create as createProfile} from "../profile/index.js";
//TODO: can it be better?
import {Model} from 'objection';
import {generateJWTToken} from "../auth/index.js";

export async function register(user) {
    const trx = await Model.knex().transaction();

    try {
        const account = await createAccount(user, trx);
        const profile = await createProfile(user, trx);
        await setAccountProfile({email: account.email, profileId: profile.id}, trx);
        await trx.commit();

        account.profile = profile;
        account.token = generateJWTToken(user.email);

        return account;
    } catch (e) {
        trx.rollback();
        //TODO: log exception somewhere
        console.error(e);
        throw e;
    }
}