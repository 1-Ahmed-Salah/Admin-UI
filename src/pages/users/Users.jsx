import { Button } from '@mui/material'
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data';
import AddModal from '../../components/addModal/AddModal';
import { useState } from 'react';
import './users.scss'

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {

  const [open, setOpen] = useState(false);


  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <Button 
          className='btn' 
          variant='outlined' 
          size='small'
          onClick={()=> setOpen(true)}
        >
          Add New User
        </Button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />
      {
        open && <AddModal slug='user' columns={columns}  setOpen={setOpen}/>
      }
    </div>
  )
}

export default Users


