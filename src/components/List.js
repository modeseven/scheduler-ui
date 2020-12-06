import React from 'react';
import { Button } from '@material-ui/core';
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
    minWidth: 650,
  },
});

async function handleClick(e, repo) {
  e.preventDefault();
  console.log('The link was clicked.',repo);

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(repo)
  };

  const response = await fetch('api/apptrqst', requestOptions);
  const data = await response.json();

}

const List = (props) => {
  const classes = useStyles();
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No requests, sorry</p>;

  return (
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">First</TableCell>
                <TableCell align="right">Last</TableCell>
                <TableCell align="right">SubjectId</TableCell>
                <TableCell align="right">CreateTime</TableCell>
                <TableCell align="right">Appt Type</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.subjectId}</TableCell>
                  <TableCell align="right">{row.createDateTime}</TableCell>
                  <TableCell align="right">{row.appointmentType}</TableCell>
                  <TableCell align="right">{row.appointmentStatus}</TableCell>
                  <TableCell align="right">
                  <Button
            variant="contained"
            onClick={e => handleClick(e, row)}
          >
            <i className="material-icons md-18 green-text">BOOK</i>
          </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
};
export default List;