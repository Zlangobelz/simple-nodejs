export const up = async (knex) => {
    return knex.schema.createTable('accounts', function (table) {
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('profile_id').unsigned().references('id').inTable('profiles');
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

export const down = async (knex) => {
    return knex.schema.dropTable('accounts');
};
