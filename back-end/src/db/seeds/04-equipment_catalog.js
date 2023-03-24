const equipment_catalog = require("./04-equipment_catalog.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE equipment_catalog RESTART IDENTITY CASCADE")
      /** inserts all equipment_catalog into the equipment_catalog table */
      .then(() => knex("equipment_catalog").insert(equipment_catalog))
  );
};
