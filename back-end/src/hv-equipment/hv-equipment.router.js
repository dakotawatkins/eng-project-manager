/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./hv-equipment.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Building the URL and specifying route parameters (ex: :project_id), to be pulled in .controller (request.params...)

router.route("/:project_id/hv/:hv_id/status").put(controller.update).all(methodNotAllowed);

router
  .route("/:project_id/hv/:hv_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

router
  .route("/:project_id/hv")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
