const service = require("./project.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// HANDLERS /////

/** lists reservations for a given date with or without a given phone number */
async function list(request, response) {
  const project_id = request.query.project_id;
  const projects = await service.list(project_id);
  response.json({ data: projects });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
