exports.up = function (knex) {
  return knex.schema.createTable("owners", (table) => {
    table.increments("owner_id").primary().notNullable();
    table.string("owner_name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("owners");
};
