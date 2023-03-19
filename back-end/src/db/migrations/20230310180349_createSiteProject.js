exports.up = function (knex) {
  return knex.schema.createTable("site_project", (table) => {
    table.integer("project_id").primary().notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("site_address_line_1");
    table.string("site_city");
    table.string("site_state");
    table.integer("site_zipcode");
    table.integer("site_latitude");
    table.integer("site_longitude");
    table.string("ashrae_city");
    table.string("ashrae_state");
    table.integer("highest_monthly_0_4");
    table.integer("highest_monthly_2_0");
    table.integer("highest_yearly_0_4");
    table.integer("highest_yearly_2_0");
    table.integer("extreme_mean_annual_design_temp_max");
    table.integer("extreme_mean_annual_design_temp_min");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("site_project");
};
