//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
function list(xfmr) {
  return knex("main_power_transformer")
    .select("*")
    .orderBy("xfmr_unique_id", "asc");
}

/** reads the data (row) with the given 'xfmr_unique_id'. */
function read(project_id, mpt_id) {
  return knex("main_power_transformer").select("*").where({
    project_id: project_id,
    mpt_id: mpt_id,
  });
  // .first();
}

/** creates a new equipment (row) */
function create(xfmr) {
  return knex("main_power_transformer").insert(xfmr).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(xfmr_unique_id, status) {
  return knex("main_power_transformer")
    .where({ xfmr_unique_id: xfmr_unique_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
