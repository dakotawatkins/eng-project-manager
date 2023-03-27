/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./equipment-catalog.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:rrc_equipment_id/status")
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/:rrc_equipment_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
