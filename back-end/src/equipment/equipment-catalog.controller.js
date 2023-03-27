const service = require("./equipment-catalog.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

///// VALIDATORS /////

/** uses read() to return the data with the given equipment id in the request params */
async function validateEquipmentId(request, response, next) {
  const { rrc_equipment_id } = request.params;
  const equipment = await service.read(rrc_equipment_id);
  if (!equipment) {
    return next({
      status: 404,
      message: `equipment id ${rrc_equipment_id} does not exist`,
    });
  }
  response.locals.equipment = equipment;
  next();
}

///// HANDLERS /////

/** creates a new equipment, and returns it's data from the equipment list */
async function create(request, response) {
  // request.body.data.status = "booked";
  const res = await service.create(request.body.data);
  response.status(201).json({ data: res[0] });
}

/** updates a valid equipment */
async function update(request, response) {
  await service.update(
    response.locals.equipment.rrc_equipment_id,
    request.body.data.status
  );

  response.status(200).json({ data: { status: request.body.data.status } });
}

/** edits a valid equipment */
async function edit(request, response) {
  const res = await service.edit(
    response.locals.equipment.rrc_equipment_id,
    request.body.data
  );
  response.status(200).json({ data: res[0] });
}

/** lists equipment */
async function list(request, response) {
  const rrc_equipment_id = request.query.rrc_equipment_id;
  const equipment = await service.list(rrc_equipment_id);
  response.json({ data: equipment });
}

/** retrieves a given equipment */
async function read(request, response) {
  response.status(200).json({ data: response.locals.equipment });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: asyncErrorBoundary(update),
  edit: asyncErrorBoundary(edit),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(validateEquipmentId), asyncErrorBoundary(read)],
};
