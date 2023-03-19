//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all reservations with the given date or mobile number. */
function list(project) {
  return knex("project_info").select("*").orderBy("project_id", "asc");
}

module.exports = {
  list,
};
