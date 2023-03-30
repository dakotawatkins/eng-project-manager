const mv_circuits = require("./09-mv_circuits.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE mv_circuits RESTART IDENTITY CASCADE")
      /** inserts all modules into the modules table */
      .then(() => knex("mv_circuits").insert(mv_circuits))
  );
};
