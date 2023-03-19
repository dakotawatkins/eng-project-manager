exports.up = function (knex) {
  return knex.schema.createTable("project_info", (table) => {
    table.increments("project_id").primary().notNullable();
    table.string("project_code").notNullable();
    table.string("project_name").notNullable();
    table.integer("client_id").unsigned().notNullable();
    table
      .foreign("client_id")
      .references("client_id")
      .inTable("clients")
      .onDelete("CASCADE");
    table.integer("owner_id").unsigned().notNullable();
    table
      .foreign("owner_id")
      .references("owner_id")
      .inTable("owners")
      .onDelete("CASCADE");
    table.integer("project_design_life");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("project_info");
};
