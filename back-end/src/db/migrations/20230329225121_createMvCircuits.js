exports.up = function (knex) {
  return knex.schema.createTable("mv_circuits", (table) => {
    table.increments("mv_unique_id").primary().notNullable();
    table.string("mv_id");
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("mv_phase");
    table.string("mv_parcel");
    table.string("mv_ppa");
    table.string("mv_mpt");
    table.string("mv_breaker_bay");
    table.string("mv_termination");
    table.string("mv_previous_feeder_id");
    table.string("mv_from");
    table.string("mv_to");
    table.string("mv_schedule_order");
    table.string("circuit_id");
    table.string("mv_number_of_skids");
    table.string("mv_cable_size_iterate");
    table.string("mv_hyperlink_tag_from_acad");
    table.string("mv_pt_to_pt_circuit_length_from_acad");
    table.string("mv_etap_bus");
    table.string("mv_3ph_sc_value_from_etap_ka");
    table.string("mv_l_g_sc_value_from_etap_ka");
    table.string("mv_l_l_sc_value_from_etap_ka");
    table.string("mv_llg_sc_value_from_etap_ka");
    table.string("int_symm_ka");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("mv_circuits");
};
