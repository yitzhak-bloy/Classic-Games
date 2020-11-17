import './Square.css'

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(16),
      height: theme.spacing(16),
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
  },
}));


const Square = ({ state, keys, clickHandler }) => {  
  const classes = useStyles();

  const handler = () => {
    clickHandler(keys)
  }
  
  return (
    <div onClick={handler} className={classes.root} >
      <Paper  >
        { state === ("O") || state === ("X") ? <h1>{state}</h1> : null }
      </Paper>
    </div>
  )
};

export default Square;