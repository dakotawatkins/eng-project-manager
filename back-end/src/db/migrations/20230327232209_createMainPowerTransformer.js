exports.up = function (knex) {
  return knex.schema.createTable("main_power_transformer", (table) => {
    table.increments("xfmr_unique_id").primary().notNullable();
    table.integer("mpt_id").notNullable();
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("transformer_manufacturer");
    table.string("transformer_model");
    table.string("degree_temp_rise_c");
    table.string("65_c_onan");
    table.string("65_c_onaf1");
    table.string("65_c_onaf2");
    table.string("power_block_qty");
    table.string("power_contribution_at_poi");
    table.string("oltc_or_detc");
    table.string("grounding_breakers");
    table.string("grounding_transformers");
    table.string("nuetral_bar_reactor");
    table.string("capacitor_bank_qty");
    table.string("capacitor_bank_rating");
    table.string("no_load_losses_w");
    table.string("load_losses_at_base_mva_w");
    table.string("onaf1_losses_w");
    table.string("onaf2_losses_w");
    table.string("percent_impedence_at_base");
    table.string("impedance_tolerance");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("main_power_transformer");
};
