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

const PopsUp = ({ open, handleClose, description }) => {
  const huPlayer = useContext(PlayerContext).huPlayer;
  const { dialogContent } = useStyles();

  const title =
    description.message ? 'error' :
      description[1] == 'tie' ? 'tie' :
        description[1] == huPlayer ? 'You won!' :
          'You lost!';
  const contentText =
    description.message ? description.message :
      description[1] == 'tie' ? 'There is no winner' :
        description[1] == huPlayer ? 'Congratulations! you are the winner!' :
          "Losing isn't the end. You can always win the next time.";
  const contentButton =
    description.message ? "Close" :
      "New game"

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
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" size="small" color="primary" autoFocus className={dialogContent}>
            {contentButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopsUp;