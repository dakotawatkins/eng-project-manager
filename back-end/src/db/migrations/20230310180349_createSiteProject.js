exports.up = function (knex) {
  return knex.schema.createTable("site_project", (table) => {
    table.increments("site_id").primary().notNullable();
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("site_address_line_1");
    table.string("site_city");
    table.string("site_county");
    table.string("site_state");
    table.integer("site_zipcode");
    table.string("site_latitude_n");
    table.string("site_longitude_w");
    table.string("site_elevation");
    table.string("ashrae_city");
    table.string("ashrae_state");
    table.string("highest_monthly_0_4");
    table.string("highest_monthly_2_0");
    table.string("highest_yearly_0_4");
    table.string("highest_yearly_2_0");
    table.string("extreme_mean_annual_design_temp_max");
    table.string("extreme_mean_annual_design_temp_min");
    table.string("min_recorded_temp");
    table.string("max_recorded_temp");
    table.string("inverter_design_temp");
    table.string("trise");
    table.string("acad_coordinate_system");
    table.string("acad_coordinate_system_abbreviation");
    table.string("acad_coordinate_system_zone");
    table.string("acad_coordinate_system_unit");
    table.string("acad_unit_length_type");
    table.string("acad_unit_length_precision");
    table.string("acad_angle_type");
    table.string("acad_angle_precision");
    table.string("acad_angle_insertion_scale");

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("site_project");
};
