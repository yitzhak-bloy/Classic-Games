// import './Square.css'

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    cursor: "pointer",
    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Square = ({ state, keys, clickHandler }) => {
  const classes = useStyles();

  const handler = () => {
    clickHandler(keys);
  };

  return (
    <div onClick={handler} className={classes.root} color='secondary'>
      <Box bgcolor='#ffb2ff' color='#400CCC'>
        {state === "O" || state === "X" ? (
          <Typography variant='h1' component='h2'>
            {state}
          </Typography>
        ) : null}
      </Box>
    </div>
  );
};

export default Square;
