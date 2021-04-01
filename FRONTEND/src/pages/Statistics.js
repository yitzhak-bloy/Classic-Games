import { useState, useContext, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@material-ui/core";


import LoadingSpinner from '../shared/components/LoadingSpinner';
import { findHighestScore } from '../Algorithms/findHighestScore';
import { UserContext } from '../shared/context/User-context';
import { useHttpClient } from '../shared/hooks/http-hook';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const createData = (name, averageRating, victory, loss, draw) => {
  return { name, averageRating, victory, loss, draw };
}

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
});

const Statistics = () => {
  const classes = useStyles();

  const currentEmailUser = useContext(UserContext).email;

  let emailOfUser;
  if (JSON.stringify(currentEmailUser) !== '{}') {
    emailOfUser = currentEmailUser
  }

  const [userStatistic, setUserStatistic] = useState(undefined);

  const { sendRequest } = useHttpClient();

  let allUsers;
  useEffect(() => {
    const req = async () => {
      try {
        allUsers = await sendRequest('http://localhost:5000/api/userStatistics/');
        setUserStatistic(allUsers.users)
      } catch (err) { }
    }
    req()
  }, [])

  if (!userStatistic) {
    return <LoadingSpinner asOverlay />
  }

  const [largestEasy, largestHard] = findHighestScore(userStatistic);

  const [userHard1, userHard2, userHard3] = largestHard;
  const [userEasy1, userEasy2, userEasy3] = largestEasy;

  const rowsPublic = [
    createData('Heard', `${userHard1.name}: [${userHard1.ticTacToeStatistic.hard.averageRating}]`, `${userHard2.name}: [${userHard2.ticTacToeStatistic.hard.averageRating}]`, `${userHard3.name}: [${userHard3.ticTacToeStatistic.hard.averageRating}]`),
    createData('easy', `${userEasy1.name}: [${userEasy1.ticTacToeStatistic.easy.averageRating}]`, `${userEasy2.name}: [${userEasy2.ticTacToeStatistic.easy.averageRating}]`, `${userEasy3.name}: [${userEasy3.ticTacToeStatistic.easy.averageRating}]`),
  ];

  let userSta;
  let rowsPersonal;
  if (emailOfUser) {
    userSta = userStatistic.filter((user) => user.email == emailOfUser)[0];

    rowsPersonal = [
      createData('Heard', userSta.ticTacToeStatistic.hard.averageRating, userSta.ticTacToeStatistic.hard.victory, userSta.ticTacToeStatistic.hard.loss, userSta.ticTacToeStatistic.hard.draw),
      createData('easy', userSta.ticTacToeStatistic.easy.averageRating, userSta.ticTacToeStatistic.easy.victory, userSta.ticTacToeStatistic.easy.loss, userSta.ticTacToeStatistic.easy.draw),
    ];
  }

  return (
    <div>
      <h1 align="center">Users with the highest score</h1>
      <TableContainer component={Paper}>
        <Table align="center" className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Difficulty</StyledTableCell>
              <StyledTableCell align="center">First Place&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Second place&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Third place&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsPublic.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.averageRating}</StyledTableCell>
                <StyledTableCell align="center">{row.victory}</StyledTableCell>
                <StyledTableCell align="center">{row.loss}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        !emailOfUser
          ?
          <h1 align="center" >
            To see the personal score, you need to <Link component={RouterLink} to="/Login" >login</Link>
          </h1>
          :
          <div>
            <h1 align="center">Personal score of {userSta.name}</h1>
            <TableContainer component={Paper}>
              <Table align="center" className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Difficulty</StyledTableCell>
                    <StyledTableCell align="center">AverageRating&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Victory&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Loss&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Draw&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsPersonal.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.averageRating}</StyledTableCell>
                      <StyledTableCell align="center">{row.victory}</StyledTableCell>
                      <StyledTableCell align="center">{row.loss}</StyledTableCell>
                      <StyledTableCell align="center">{row.draw}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      }
    </div>
  )
};

export default Statistics;