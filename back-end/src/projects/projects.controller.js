const service = require("./projects.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given reservation id in the request params */
async function validateProjectId(request, response, next) {
  const { project_id } = request.params;
  const project = await service.read(Number(project_id));
  if (!project) {
    return next({
      status: 404,
      message: `project id ${project_id} does not exist`,
    });
  }
  response.locals.project = project;
  next();
}

///// HANDLERS /////

/** lists reservations for a given date with or without a given phone number */
async function list(request, response) {
  const project_id = request.query.project_id;
  const projects = await service.list(project_id);
  response.json({ data: projects });
}

/** retrieves a given reservation */
async function read(request, response) {
  response.status(200).json({ data: response.locals.project });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateProjectId), asyncErrorBoundary(read)],
};
