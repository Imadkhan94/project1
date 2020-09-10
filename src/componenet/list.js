import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      Width: 200,
    },
  });
  
  function createData(name, Age, Email, Contact) {
    return { name, Age, Email, Contact };
  }
  
  const rows = [
    createData('Muhammad', 59, "muhammad@gmail.com","0332xxxxxxx"),
    createData('Ali', 23, "Ali@gmail.com","0300xxxxxxx"),
    createData('Shan', 21, "Shan@gmail.com","0315xxxxxxx"),
    createData('khan', 30,"khan@gmail.com","0335xxxxxxx"),
    createData('waqar', 32,"waqar@gmail.com","0312xxxxxxx"),
  ];
function List(){
    const classes = useStyles();
    return(
        <div className="class">
<TableContainer component={Paper}>
    <h1>Students List</h1>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
} export default List;