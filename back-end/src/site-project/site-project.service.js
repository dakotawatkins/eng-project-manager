//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
function list(siteProject) {
  return knex("site_project").select("*").orderBy("site_id", "asc");
}

/** reads the data (row) with the given 'site_id'. */
function read(site_id) {
  return knex("site_project").select("*").where({ site_id: site_id }).first();
}

/** creates a new equipment (row) */
function create(siteProject) {
  return knex("site_project").insert(siteProject).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(site_id, status) {
  return knex("site_project")
    .where({ site_id: site_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
