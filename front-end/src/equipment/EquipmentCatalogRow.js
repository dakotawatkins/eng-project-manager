import React from "react";

/** a function to display an individual 'EquipmentCatalogRow' with data (columns) shown below */
function EquipmentCatalogRow({ equipmentItem }) {
  /** displays a single equipmentItem;
   *  each single reservation is mapped in 'equipmentCatalogJSX()' in 'EquipmentCatalog'
   *  to create a list of equipment.
   */
  return (
    <tr style={{ fontFamily: "Courier" }}>
      <td className="text-center text-white">
        {equipmentItem.unique_equipment_id}
      </td>
      <td className="text-center text-white">
        {equipmentItem.rrc_equipment_id}
      </td>
      <td className="text-center text-white">
        {equipmentItem.equipment_description}
      </td>
      <td className="text-center text-white">
        {equipmentItem.equipment_description2}
      </td>
      <td className="text-center text-white">
        {equipmentItem.equipment_category}
      </td>
      <td className="text-center text-white">
        {equipmentItem.equipment_manufacturer}
      </td>
      <td className="text-center text-white">
        {equipmentItem.equipment_manufacturer_part_id}
      </td>
    </tr>
  );
}

export default EquipmentCatalogRow;
