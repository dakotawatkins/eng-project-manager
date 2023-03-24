exports.up = function (knex) {
  return knex.schema.createTable("equipment_catalog", (table) => {
    table.increments("unique_equipment_id").primary().notNullable();
    table.string("rrc_equipment_id", [6]).notNullable();
    table.string("vendor1_equipment_id", [3]);
    table.string("vendor2_equipment_id", [8]);
    table.string("equipment_description").notNullable();
    table.string("equipment_description2");
    table.string("equipment_category");
    table.string("equipment_manufacturer");
    table.string("equipment_manufacturer_part_id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("equipment_catalog");
};
