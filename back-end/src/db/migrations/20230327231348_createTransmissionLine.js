exports.up = function (knex) {
  return knex.schema.createTable("transmission_line", (table) => {
    table.increments("unique_id").primary().notNullable();
    table.integer("section_id").unique().notNullable();
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("from");
    table.string("to");
    table.integer("distance_m");
    table.integer("conductor_size_m2");
    table.integer("conductor_positive_sequence_resistance");
    table.integer("basis_temp_of_provided_resistance_c");
    table.integer("normal_op_temp_of_conductor_c");
    table.integer("bundle_size");
    table.string("additional_loading_on_t_line_from_nearby_projects");
    table.string("nearby_project");
    table.string("rrc_notes");
    table.string("client_notes");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transmission_line");
};
