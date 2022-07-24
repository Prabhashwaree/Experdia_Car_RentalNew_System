import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
  { driver_NIC: '986975845V', date: '7/24/2022', time: '5.00', licen: '5486EC',name:'Nethmini',address:'Panadura', contact_No:'0778458970',salary:52000},
];



 
 
 // createData('P016', '2022/07/24', '6.00', '2000','1000','3000','Pending',25000),



export default function ManagePayment() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
