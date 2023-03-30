const service = require("./mv-circuits.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateMvUniqueId(request, response, next) {
  const { mv_unique_id } = request.params;
  const mvCircuit = await service.read(mv_unique_id);
  if (!mvCircuit) {
    return next({
      status: 404,
      message: `mv unique id ${mv_unique_id} does not exist`,
    });
  }
  response.locals.mvCircuit = mvCircuit;
  next();
}

///// HANDLERS /////

/** creates a new mvCircuit, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid mvCircuit */
async function update(request, response) {
  await service.update(
    response.locals.mvCircuit.mv_unique_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid mvCircuit */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.mvCircuit.mv_unique_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists mvCircuit */
async function list(request, response) {
  const mv_unique_id = request.query.mv_unique_id;
  const mvCircuit = await service.list(mv_unique_id);
  response.json({ data: mvCircuit });
}

/** retrieves a given mvCircuit */
async function read(request, response) {
  response.status(200).json({ data: response.locals.mvCircuit });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateMvUniqueId), asyncErrorBoundary(read)],
};
