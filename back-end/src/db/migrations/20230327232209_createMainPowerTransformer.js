exports.up = function (knex) {
  return knex.schema.createTable("main_power_transformer", (table) => {
    table.increments("unique_id").primary().notNullable();
    table.integer("mpt_id").unique().notNullable();
    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("project_id")
      .inTable("project_info")
      .onDelete("CASCADE");
    table.string("transformer_manufacturer");
    table.string("transformer_model");
    table.integer("degree_temp_rise_c");
    table.integer("65_c_onan");
    table.integer("65_c_onaf1");
    table.integer("65_c_onaf2");
    table.integer("power_block_qty");
    table.integer("power_contribution_at_poi");
    table.string("oltc_or_detc");
    table.string("grounding_breakers");
    table.string("grounding_transformers");
    table.integer("nuetral_bar_reactor");
    table.integer("capacitor_bank_qty");
    table.integer("capacitor_bank_rating");
    table.integer("no_load_losses_w");
    table.integer("load_losses_at_base_mva_w");
    table.integer("onaf1_losses_w");
    table.integer("onaf2_losses_w");
    table.integer("percent_impedence_at_base");
    table.integer("impedance_tolerance");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("main_power_transformer");
};
