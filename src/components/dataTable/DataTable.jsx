import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import './dataTable.scss'
import { Link } from "react-router-dom"

const DataTable = ({columns, rows, slug}) => {

  const handleDelete = (id) => {
    console.log(`${id} has been deleted`)
  }

  const actionsColumns = {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => {
      return <div className="actions">
        <Link to={`/${slug}/${params.row.id}`}>
          <img src="view.svg" alt="" />
        </Link>
        
        <div className="delete">
          <img src="delete.svg" alt="" onClick={()=> handleDelete(params.row.id)} />
        </div>
        
      </div>
    }
  }
  
  return (
    <div className="dataTable">
        <DataGrid
            className="dataGrid"
            rows={rows}
            columns={[...columns, actionsColumns]}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 10,
                },
            },
            }}
            slots={{
                toolbar: GridToolbar
            }}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 }
                }
            }}
            pageSizeOptions={[15]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
        />
    </div>
  )
}

export default DataTable