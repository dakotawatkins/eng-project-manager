const owners = require("./01-owners.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE owners RESTART IDENTITY CASCADE")
      /** inserts all owners into the owners table */
      .then(() => knex("owners").insert(owners))
  );
};
