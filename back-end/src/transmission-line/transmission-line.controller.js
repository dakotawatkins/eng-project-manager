const service = require("./transmission-line.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateTransmissionLineUniqueId(request, response, next) {
  const { transmission_line_unique_id, project_id } = request.params;
  const transmissionLine = await service.read(transmission_line_unique_id, project_id);
  if (!transmissionLine) {
    return next({
      status: 404,
      message: `transmission line unique id ${transmission_line_unique_id} does not exist`,
    });
  }
  response.locals.transmissionLine = transmissionLine;
  next();
}

///// HANDLERS /////

/** creates a new transmissionLine, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid transmissionLine */
async function update(request, response) {
  await service.update(
    response.locals.transmissionLine.transmission_line_unique_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid transmissionLine */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.transmissionLine.transmission_line_unique_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists transmissionLine */
async function list(request, response) {
  //'request.params' pulls 'project_id' from '.router' file where the url was built ("/:project_id/modules/:mod_id")
  const transmissionLineUniqueId = request.params.transmission_line_unique_id;
  const projectId = request.params.project_id;
  const transmissionLine = await service.list(transmissionLineUniqueId, projectId);
  response.json({ data: transmissionLine });
}

/** retrieves a given transmissionLine */
async function read(request, response) {
  response.status(200).json({ data: response.locals.transmissionLine });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [
    asyncErrorBoundary(validateTransmissionLineUniqueId),
    asyncErrorBoundary(read),
  ],
};
