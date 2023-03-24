/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./equipmentCatalog.controller");
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
