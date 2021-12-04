import {create as createAccount, setProfile as setAccountProfile} from "../account/index.js";
import {create as createProfile} from "../profile/index.js";
import {Model} from 'objection';

export async function register(user) {
    const trx = await Model.knex().transaction();

    try {
        const account = await createAccount(user, trx);
        const profile = await createProfile(user, trx);
        await setAccountProfile({email: account.email, profileId: profile.id}, trx);
        await trx.commit();

        account.profile = profile;

        return account;
    } catch (e) {
        trx.rollback();
        //TODO: log exception somewhere
        console.error(e);
        throw e;
    }
}