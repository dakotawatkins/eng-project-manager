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
    <div className="container">
      <h2>Equipment Catalog</h2>
      <table className="table table-bordered table-hover">
        <thead className="">
          <tr className="">
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
    </div>
  );
}

export default EquipmentCatalog;
