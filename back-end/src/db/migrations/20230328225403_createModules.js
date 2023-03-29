exports.up = function (knex) {
  return knex.schema.createTable("modules", (table) => {
    table.increments("mod_id").primary().notNullable();
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("mod_number");
    table.string("mod_manufacturer");
    table.string("mod_series");
    table.string("mod_model");
    table.string("mod_chemistry");
    table.string("mod_mono_or_bi_facial");
    table.string("mod_cells");
    table.string("mod_frame");
    table.string("mod_connector");
    table.string("mod_frame_width_mm");
    table.string("mod_frame_length_mm");
    table.string("mod_lead_length");
    table.string("mod_max_voltage_v");
    table.string("mod_max_power_w");
    table.string("mod_open_circuit_voltage_v");
    table.string("mod_short_circuit_current_isc_a");
    table.string("mod_max_power_current_vmp_v");
    table.string("mod_efficiency");
    table.string("mod_max_series_fuse_rating_a");
    table.string("mod_power_output_tolerance_w");
    table.string("mod_voc_and_isc_tolerance");
    table.string("mod_nmot");
    table.string("mod_coefficient_of_isc");
    table.string("mod_coefficient_of_voc");
    table.string("mod_coefficient_of_pmax");
    table.string("mod_string_size");
    table.string("mod_3hr_ave_max_current_front_side_a");
    table.string("mod_3hr_ave_max_current_w_bifacial_gain_a");
    table.string("mod_bifacial_gain");
    table.string("mod_modeling_buffer");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("high_voltage");
};
