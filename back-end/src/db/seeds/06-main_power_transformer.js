const main_power_transformer = require("./06-main_power_transformer.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE main_power_transformer RESTART IDENTITY CASCADE")
      /** inserts all main_power_transformer into the main_power_transformer table */
      .then(() => knex("main_power_transformer").insert(main_power_transformer))
  );
};
