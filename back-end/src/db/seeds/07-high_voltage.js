const high_voltage = require("./07-high_voltage.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE high_voltage RESTART IDENTITY CASCADE")
      /** inserts all high_voltage into the high_voltage table */
      .then(() => knex("high_voltage").insert(high_voltage))
  );
};
