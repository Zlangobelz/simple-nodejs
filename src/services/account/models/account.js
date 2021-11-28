import {Model} from "objection";

export default class Account extends Model {
    static get tableName() {
        return 'accounts';
    }

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