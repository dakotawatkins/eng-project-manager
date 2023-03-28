exports.up = function (knex) {
  return knex.schema.createTable("high_voltage", (table) => {
    table.increments("hv_id").primary().notNullable();
    table.integer("hv_interconnect_voltage_kv");
    table.integer("per_unit_base_mva");
    table.integer("utility_fault_current");
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.integer("section_id").notNullable();
    table
      .foreign("section_id")
      .references("section_id")
      .inTable("transmission_line")
      .onDelete("CASCADE");
    table.integer("xfmr_unique_id").notNullable();
    table
      .foreign("xfmr_unique_id")
      .references("xfmr_unique_id")
      .inTable("main_power_transformer")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("high_voltage");
};
