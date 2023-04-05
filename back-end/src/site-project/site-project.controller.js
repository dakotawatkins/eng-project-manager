const service = require("./site-project.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateProjectId(request, response, next) {
  const { site_id } = request.params;
  const siteProject = await service.read(site_id);
  if (!siteProject) {
    return next({
      status: 404,
      message: `project id ${site_id} does not exist`,
    });
  }
  response.locals.siteProject = siteProject;
  next();
}

///// HANDLERS /////

/** creates a new siteProject, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid siteProject */
async function update(request, response) {
  await service.update(
    response.locals.siteProject.site_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid siteProject */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.siteProject.site_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists siteProject */
async function list(request, response) {
  const site_id = request.query.site_id;
  const siteProject = await service.list(site_id);
  response.json({ data: siteProject });
}

/** retrieves a given siteProject */
async function read(request, response) {
  response.status(200).json({ data: response.locals.siteProject });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateProjectId), asyncErrorBoundary(read)],
};
