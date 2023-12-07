/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./modules.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Building the URL and specifying route parameters (ex: :project_id), to be pulled in .controller (request.params...)

router.route("/:project_id/modules/:mod_id/status").put(controller.update).all(methodNotAllowed);

router
  .route("/:project_id/modules/:mod_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

router
  .route("/:project_id/modules")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
