//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all hv spec columns in asc order. */
function list(hvSpecs) {
  return knex("high_voltage").select("*").orderBy("hv_id", "asc");
}

/** reads the data (row) with the given 'hv_id'. */
function read(hv_id) {
  return knex("high_voltage").select("*").where({ hv_id: hv_id }).first();
}

/** creates a new equipment (row) */
function create(hvSpecs) {
  return knex("high_voltage").insert(hvSpecs).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(hv_id, status) {
  return knex("high_voltage")
    .where({ hv_id: hv_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
