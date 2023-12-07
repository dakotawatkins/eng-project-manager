const service = require("./main-power-transformer.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateXfmrUniqueId(request, response, next) {
  const { project_id, mpt_id } = request.params;
  const xfmr = await service.read(project_id, mpt_id);
  if (!xfmr) {
    return next({
      status: 404,
      message: `xfmr unique id ${mpt_id} does not exist`,
    });
  }
  response.locals.xfmr = xfmr;
  next();
}

///// HANDLERS /////

/** creates a new xfmr, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid xfmr */
async function update(request, response) {
  await service.update(
    response.locals.xfmr.xfmr_unique_id,
    request.body.data.status
  );
  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid xfmr */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.xfmr.xfmr_unique_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists xfmr */
async function list(request, response) {
  //'request.params' pulls 'project_id' from '.router' file where the url was built ("/:project_id/modules/:mod_id")
  const mptId = request.params.mpt_id;
  const projectId = request.params.project_id;
  const xfmr = await service.list(mptId, projectId);
  response.json({ data: xfmr });
}

/** retrieves a given xfmr */
async function read(request, response) {
  response.status(200).json({ data: response.locals.xfmr });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateXfmrUniqueId), asyncErrorBoundary(read)],
};
