const service = require("./hv-equipment.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateHvEquipmentId(request, response, next) {
  const { hv_id } = request.params;
  const hvEquipment = await service.read(hv_id);
  if (!hvEquipment) {
    return next({
      status: 404,
      message: `hv equipment id ${hv_id} does not exist`,
    });
  }
  response.locals.hvEquipment = hvEquipment;
  next();
}

///// HANDLERS /////

/** creates a new hVequipment, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid hVequipment */
async function update(request, response) {
  await service.update(
    response.locals.hvEquipment.hv_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid hVequipment */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.hvEquipment.hv_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists hvEquipment */
async function list(request, response) {
  const hv_id = request.query.hv_id;
  const hvEquipment = await service.list(hv_id);
  response.json({ data: hvEquipment });
}

/** retrieves a given hvEquipment */
async function read(request, response) {
  response.status(200).json({ data: response.locals.hvEquipment });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateHvEquipmentId), asyncErrorBoundary(read)],
};
