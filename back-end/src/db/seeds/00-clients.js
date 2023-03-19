const clients = require("./00-clients.json");

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE clients RESTART IDENTITY CASCADE")
      /** inserts all clients into the clients table */
      .then(() => knex("clients").insert(clients))
  );
};
