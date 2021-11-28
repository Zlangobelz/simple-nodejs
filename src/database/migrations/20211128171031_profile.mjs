export const up = async (knex) => {
    return knex.schema.createTable('profiles', function (table) {
        table.increments();
        table.string('username').notNullable();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

export const down = async (knex) => {
    return knex.schema.dropTable('profiles');
};
