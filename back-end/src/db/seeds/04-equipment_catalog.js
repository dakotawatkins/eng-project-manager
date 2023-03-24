const equipment_catalog = require("./04-equipment_catalog.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE equipment_catalog RESTART IDENTITY CASCADE")
      /** inserts all site_project into the site_project table */
      .then(() => knex("equipment_catalog").insert(equipment_catalog))
  );
};
