import {Model} from "objection";

export default class Profile extends Model {
    static get tableName() {
        return 'profiles';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstname', 'lastname', 'username'],
            properties: {
                firstname: {type: 'string'},
                lastname: {type: 'string'},
                username: {type: 'string'},
            }
        }
    }
}