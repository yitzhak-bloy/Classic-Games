import { useEffect } from 'react';
import { Button } from '@material-ui/core';

import './DirectionButtons.css';

const DirectionButtons = ({ handelRight, handelLeft, handelUp, handelDown }) => {

  useEffect(() => {
    document.onkeydown = checkKey;

    function checkKey(e) {
      e = e || window.event;

      if (e.keyCode == '38') {
        handelUp()
      }
      else if (e.keyCode == '40') {
        handelDown()
      }
      else if (e.keyCode == '37') {
        handelLeft()
      }
      else if (e.keyCode == '39') {
        handelRight()
      }
    }
  })

  return (
    <div className='buttons'>
      <div className='buttons-directions' >
        <div></div>
        <Button onClick={handelUp} disableElevation variant="outlined" size="large" color="primary" >up</Button>
        <div></div>
        <Button onClick={handelLeft} disableElevation variant="outlined" size="large" color="primary" >left</Button>
        <div></div>
        <Button onClick={handelRight} disableElevation variant="outlined" size="large" color="primary" >right</Button>
        <div></div>
        <Button onClick={handelDown} disableElevation variant="outlined" size="large" color="primary" >down</Button>
        <div></div>
      </div>
    </div>
  )
}

export default DirectionButtons;