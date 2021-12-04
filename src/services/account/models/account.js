import {Model} from "objection";
import Profile from "../../profile/models/profile.js";

export default class Account extends Model {
    static get tableName() {
        return 'accounts';
    }

    static relationMappings = {
        profile: {
            relation: Model.BelongsToOneRelation,
            modelClass: Profile,
            join: {
                from: 'accounts.profile_id',
                to: 'profiles.id'
            }
        }
    };

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: {type: ['string']},
                password: {type: 'string'},
                profile_id: {type: ['number', 'null']},
            }
        }
    }
}