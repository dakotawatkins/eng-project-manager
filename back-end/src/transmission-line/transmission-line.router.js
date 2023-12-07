/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./transmission-line.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:project_id/transmission-line/:transmission_line_unique_id/status")
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/:project_id/transmission-line/:transmission_line_unique_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

router
  .route("/:project_id/transmission-line")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
