const service = require("./modules.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateModId(request, response, next) {
  const { mod_id } = request.params;
  const modEquipment = await service.read(mod_id);
  if (!modEquipment) {
    return next({
      status: 404,
      message: `mod equipment id ${mod_id} does not exist`,
    });
  }
  response.locals.modEquipment = modEquipment;
  next();
}

///// HANDLERS /////

/** creates a new modEquipment, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid modEquipment */
async function update(request, response) {
  await service.update(
    response.locals.modEquipment.mod_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid modEquipment */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.modEquipment.mod_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists modEquipment */
async function list(request, response) {
  const mod_id = request.query.mod_id;
  const modEquipment = await service.list(mod_id);
  response.json({ data: modEquipment });
}

/** retrieves a given modEquipment */
async function read(request, response) {
  response.status(200).json({ data: response.locals.modEquipment });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateModId), asyncErrorBoundary(read)],
};
