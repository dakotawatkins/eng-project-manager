// function EquipmentCatalog() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }
// export default EquipmentCatalog;

import React, { useState, useEffect } from "react";
import EquipmentCatalogRow from "./EquipmentCatalogRow";
import { listEquipment } from "../utils/api";

function EquipmentCatalog() {
  const [equipment, setEquipment] = useState([]);
  //   const [equipmentError, setEquipmentError] = null;

  // calls 'listEquipment' from api to fetch equipment catalog
  function loadEquipmentCatalog() {
    // setEquipmentError(null);
    const abortController = new AbortController();
    listEquipment(abortController.signal)
      .then((equipment) => {
        return equipment;
      })
      .then(setEquipment);
    //   .catch(setEquipmentError);
    return () => abortController.abort();
  }

  // calls 'loadEquipmentCatalog' to fetch equipment catalog
  useEffect(() => {
    loadEquipmentCatalog();
  }, []);

  /** iterates each reservation and returns a 'ReservationRow' */
  const equipmentCatalogJSX = () => {
    return equipment.map((equipmentItem) => (
      <EquipmentCatalogRow
        key={equipmentItem.unique_equipment_id}
        equipmentItem={equipmentItem}
      />
    ));
  };

  return (
    <>
      <h1>Equipment Catalog</h1>

      <table className="table text-wrap text-center table-hover">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">RRC #</th>
            <th scope="col">RRC Description</th>
            <th scope="col">Secondary Description</th>
            <th scope="col">Category</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Manufacturer #</th>
          </tr>
        </thead>
        <tbody>{equipmentCatalogJSX()}</tbody>
      </table>
    </>
  );
}

export default EquipmentCatalog;
