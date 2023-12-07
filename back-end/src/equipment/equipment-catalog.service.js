//// Service.js file:  holds functions that make all the CRUD transactions for one table ////
const knex = require("../db/connection");

/** lists all equipment in asc order. */
function list(rrcEquipmentId) {
  return knex("equipment_catalog")
    .select("*")
    .orderBy("rrc_equipment_id", "asc");
}

/** reads the data (row) with the given 'unique_equipment_id'. */
function read(rrc_equipment_id) {
  return knex("equipment_catalog")
    .select("*")
    .where({ rrc_equipment_id: rrc_equipment_id })
    .first();
}

/** creates a new equipment (row) */
function create(equipment) {
  return knex("equipment_catalog").insert(equipment).returning("*");
}

/** updates equipment with the given reservation_id. */
function update(rrc_equipment_id, status) {
  return knex("equipment_catalog")
    .where({ rrc_equipment_id: rrc_equipment_id })
    .update({ status: status });
}

module.exports = {
  list,
  read,
  create,
  update,
};
