/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./mv-circuits.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:project_id/mv-circuits/:mv_id/status").put(controller.update).all(methodNotAllowed);

router
  .route("/:project_id/mv-circuits/:mv_unique_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

router
  .route("/:project_id/mv-circuits")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
