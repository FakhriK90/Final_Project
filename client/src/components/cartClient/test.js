import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavigationClient from '../navigation/NavigationClietn';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions/actionCart';
import { getProduct } from '../../redux/actions/actionsProductAdmin';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const DisplayCart = ({cartClient}) => {

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProduct({productName: cartClient.productName,productPrice: cartClient.productPrice}))
  }, [])
    return (
        <div>
          <NavigationClient/>
          <div className="contCart">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{cartClient && cartClient.productName}</StyledTableCell>
            <StyledTableCell align="right">{cartClient && cartClient.productPrice}</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
        </div>
        </div>
    )
}

export default DisplayCart
