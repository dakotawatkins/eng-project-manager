//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all projects in asc order. */
function list(project) {
  return knex("project_info").select("*").orderBy("project_id", "asc");
}

/** reads the data (row) with the given 'project_id'. */
function read(project_id) {
  return knex("project_info")
    .select("*")
    .where({ project_id: project_id })
    .first();
}

module.exports = {
  list,
  read,
};
