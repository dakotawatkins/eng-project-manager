exports.up = function (knex) {
  return knex.schema.createTable("clients", (table) => {
    table.increments("client_id").primary().notNullable();
    table.string("client_name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clients");
};
