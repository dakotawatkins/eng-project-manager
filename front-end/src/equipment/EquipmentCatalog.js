import React, { useState, useEffect } from "react";
import EquipmentCatalogRow from "./EquipmentCatalogRow";
import { listEquipment, createEquipment } from "../utils/api";

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  gridClasses,
} from '@mui/x-data-grid';
import { Pagination } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';


function EquipmentCatalog() {
  const [equipment, setEquipment] = useState([]);
  //   const [equipmentError, setEquipmentError] = null;

  const [rowModesModel, setRowModesModel] = React.useState({});


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


  // function handleSubmit(sumbmittedFormData) {
  //   const abortController = new AbortController();
  //   createEquipment(submitEquipData, abortController.signal)
  //   return () => abortController.abort();
  // };


  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const handleClick = () => {
      setEquipment((oldRows) => [...oldRows, { unique_equipment_id: oldRows.length+1, rrc_equipment_id: '', equipment_description: '', equipment_category: '', equipment_manufacturer: '', equipment_manufacturer_part_id: '', isNew: true }]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [equipment.rrc_equipment_id]: { mode: GridRowModes.Edit, fieldToFocus: 'rrc_equipment_id' },
      }));
    };
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add Equipment 
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setEquipment(equipment.map((row) => (row.rrc_equipment_id === newRow.rrc_equipment_id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };


  const rows = equipment

  // console.log('rrc_equipment_id', rows[1])

  const columns = [
    { field: 'rrc_equipment_id', headerName: 'RRC ID', width: 100, headerClassName: 'equip-table-header', align: 'center', headerAlign: 'center', editable: true, },
    { field: 'equipment_description', headerName: 'Description', width: 700, align: 'left', headerAlign: 'left', editable: true, },
    { field: 'equipment_category', headerName: 'Category', width: 150, align: 'center', headerAlign: 'center', editable: true, },
    { field: 'equipment_manufacturer', headerName: 'Manufacturer', width: 150, align: 'center', headerAlign: 'center', editable: true, },
    { field: 'equipment_manufacturer_part_id', headerName: 'Manufacturer P/N', width: 150, align: 'left', headerAlign: 'left', editable: true, }
  ]

  // return (
  //   <Box sx={{ height: '75%', width: '75%' }}>
  //     <DataGrid
  //       getRowId={(row) => row.rrc_equipment_id}
  //       rows={rows}
  //       columns={columns}
  //       getRowClassName={(params) =>
  //         params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
  //       }
  //       // initialState={{
  //       //   pagination: {
  //       //     paginationModel: {
  //       //       pageSize: 5,
  //       //     },
  //       //   },
  //       // }}
  //       // pageSizeOptions={[5]}
  //       checkboxSelection
  //       disableRowSelectionOnClick
  //     />
  //   </Box>
  // )


  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.grey[200],
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity,
        ),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    },
    '& .equip-table-header': {
      // backgroundColor: 'rgba(255, 7, 0, 0.55)',
    },
  }));
  
    return (
      <div className="equipment-catalog" style={{ height: '675px' }}>
        <StripedDataGrid 
          // loading={loading}
          getRowId={(row) => row.rrc_equipment_id}
          rows={rows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          checkboxSelection
          pageSizeOptions={[25, 50, 100]}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setEquipment, setRowModesModel },
          }}
        />
      </div>
    );
}

export default EquipmentCatalog;
