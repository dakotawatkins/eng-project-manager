/**
 * Defines the router for equipment resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./main-power-transformer.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:project_id/main-power-transformer/:mpt_id/status")
  .put(controller.update)
  .all(methodNotAllowed);

// router
//   .route("/:xfmr_unique_id")
//   .get(controller.read)
//   .put(controller.edit)
//   .all(methodNotAllowed);

router
  .route("/:project_id/main-power-transformer/:mpt_id")
  .get(controller.read)
  .put(controller.edit)
  .all(methodNotAllowed);

// router
//   .route("/")
//   .get(controller.list)
//   .post(controller.create)
//   .all(methodNotAllowed);
router
  .route("/:project_id/main-power-transformer/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
