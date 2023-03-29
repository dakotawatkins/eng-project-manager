const modules = require("./08-modules.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE modules RESTART IDENTITY CASCADE")
      /** inserts all modules into the modules table */
      .then(() => knex("modules").insert(modules))
  );
};
