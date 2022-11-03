import { useState } from 'react';
import { useRouter } from 'next/router';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styles from './customTable.module.css'

const CustomTable = ({ tableRows, tableColumns, baseUrl }) => {

  const router = useRouter();

  const [pageSize, setPageSize] = useState(10)

  const handleClick = (id) => {
    baseUrl && router.push(`${baseUrl}/${id}`);
  }

  return (
    <div className={styles.dataGridContainer}>
      <DataGrid
        className={styles.dataGrid}
        rows={tableRows}
        getRowId={(row) => row[Object.keys(row)[0]]}//1st element in row object should be id.
        columns={tableColumns}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageSize={pageSize}
        components={{ Toolbar: GridToolbar }}
        disableSelectionOnClick
        onRowClick={(e) => handleClick(e.id)}
        // autoHeight
        // autoPageSize
        pagination
        sx={{
          borderRadius: '10px',
          background: '#fff',
          border: 'none',
          '& .MuiDataGrid-row': { cursor: 'pointer' },
        }}
      />
    </div>
  )
}

export default CustomTable
