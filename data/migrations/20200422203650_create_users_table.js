
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
	// Auto incrementing userid
	table.increments();
	// Username, text, notNullable
	table.text('username').notNullable();
	// Password, text,, notNullable
	table.text('password').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
