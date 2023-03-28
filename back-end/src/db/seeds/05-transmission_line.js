const transmission_line = require("./05-transmission_line.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE transmission_line RESTART IDENTITY CASCADE")
      /** inserts all transmission_line info into the transmission_line table */
      .then(() => knex("transmission_line").insert(transmission_line))
  );
};
