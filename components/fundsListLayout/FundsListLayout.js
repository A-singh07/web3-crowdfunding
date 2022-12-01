import { useState, useEffect, useContext } from 'react';
import HeaderLight from '../header/HeaderLight';
import CustomTable from '../customTable/CustomTable';
import Chip from '@mui/material/Chip';
import moment from 'moment';
import { Web3Context } from '../../context/Web3Context';

// data
// import { allFundsList } from '../../data/adminFundsData';

import styles from './fundsListLayout.module.css';

const FundsListLayout = ({ isAdmin }) => {
  const { getAllFundsList } = useContext(Web3Context);

  const getChipProps = (params) => {
    if (params.value === "In Progress" || params.value === "Voting") {
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
    } else if (params.value === "Rejected" || params.value === "Closed") {
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
      field: 'fundId',
      headerName: 'Fund ID',
      width: 70
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 480
    },
    {
      field: 'target',
      headerName: 'Target Amount',
      width: 180
    },
    {
      field: 'deadline',
      headerName: 'Deadline',
      width: 220
    },
    {
      field: 'Admin_status',
      headerName: 'Status',
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return <Chip variant="outlined" {...getChipProps(params)} />
      }
    },

  ]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    getAllFundsList()
      .then(res => {
        const funds = [];
        res.forEach(item => {
          const rowData = {
            fundId: item.fundId,
            name: item.description,
            target: item.target,
            deadline: moment.unix(item.deadline).format("DD-MM-YYYY || HH:mm a"),
            Admin_status: item.fundClosed ? "Closed" : item.Voting_Enabled ? "Voting" : item.Admin_status
          }
          funds = [...funds, rowData];
        })
        setRowData(funds);
      })
  }, [])


  return (
    <section>
      <HeaderLight heading="All funds" />
      <CustomTable
        tableColumns={colData}
        tableRows={rowData}
        baseUrl={'/funds'}
      />
    </section>
  )
}

export default FundsListLayout
