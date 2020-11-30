import { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { PlayerContext } from '../shared/context/Player-context';

const PopsUp = ({ open, handleClose, win }) => {
  const huPlayer = useContext(PlayerContext).huPlayer;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"And the winner is:"}</DialogTitle>
        {
          win[1] == huPlayer 
          ?
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Congratulations! you are the winner!
            </DialogContentText>
          </DialogContent> 
          :
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Losing isn't the end. You can always win the next time.
            </DialogContentText>
          </DialogContent> 
        }
        <DialogActions>
          <Button onClick={handleClose}  variant="outlined" size="small" color="primary" autoFocus>
            new game
          </Button>                             
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopsUp;