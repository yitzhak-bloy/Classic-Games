import "./CardGame.css";
import { Link as RouterLink } from "react-router-dom";

import { Link } from "@material-ui/core";

const CardGame = ({ link, name }) => {
  return (
    <a className='card__game' component={RouterLink} href={link}>
      <div className='imag-card__game'></div>
      <div className='name-card__game'>{name}</div>
    </a>
  );
};

export default CardGame;
