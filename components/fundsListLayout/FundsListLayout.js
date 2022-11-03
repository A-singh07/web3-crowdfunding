import { useState, useEffect } from 'react';
import CustomTable from '../customTable/CustomTable';
import Chip from '@mui/material/Chip'

// data
import { allFundsList } from '../../data/adminFundsData';

import styles from './fundsListLayout.module.css';

const FundsListLayout = ({ isAdmin }) => {

  const getChipProps = (params) => {
    if (params.value === "In-process") {
      return {
        label: params.value,
        style: {
          borderColor: "#e2b93b",
          color: "#e2b93b"
        }
      }
    } else if (params.value === "Approved") {
      return {
        label: params.value,
        style: {
          borderColor: "#3aab9f",
          color: "#3aab9f"
        }
      }
    } else if (params.value === "Rejected") {
      return {
        label: params.value,
        style: {
          borderColor: "#e35e5e",
          color: "#e35e5e"
        }
      }
    } else {
      return {
        label: params.value,
        style: {
          borderColor: "#939ca3"
        }
      }
    }
  }

  const [colData, setColData] = useState([
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 300
    },
    {
      field: 'targetAmount',
      headerName: 'Target',
      width: 180
    },
    {
      field: 'deadline',
      headerName: 'Deadline',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => {
        return <Chip variant="outlined" {...getChipProps(params)} />
      }
    },

  ]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(allFundsList)
  }, [allFundsList])

  return (
    <section>
      {
        isAdmin &&
        <h3 className={styles.heading}>All Funds</h3>
      }
      <div className={styles.tableContainer}>
        <CustomTable
          tableColumns={colData}
          tableRows={rowData}
          baseUrl={'/admin/funds'}
        />
      </div>
    </section>
  )
}

export default FundsListLayout
