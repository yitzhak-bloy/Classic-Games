import { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import { PlayerContext } from '../shared/context/Player-context';

const useStyles = makeStyles(() => ({
  dialogContent: {
    margin: 'auto',
    width: 'fit-content',
  },
}));

const PopsUp = ({ open, handleClose, win }) => {
  const huPlayer = useContext(PlayerContext).huPlayer;
  const { dialogContent } = useStyles();

  const title = win[1] == 'tie' ? 'tie' : win[1] == huPlayer ? 'You won!' : 'You lost!';
  const ContentText = win[1] == 'tie' ? 'There is no winner' : win[1] == huPlayer ? 'Congratulations! you are the winner!' : "Losing isn't the end. You can always win the next time.";

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={dialogContent}>{title}</DialogTitle>
        <DialogContent className={dialogContent}>
          <DialogContentText id="alert-dialog-description">
            {ContentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small" color="primary" autoFocus className={dialogContent}>
            new game
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopsUp;