import { Link as RouterLink } from "react-router-dom";

import { Link } from "@material-ui/core";

const CardGame = ({ link, name }) => {
  return (
    <h1>
      To the{" "}
      <Link component={RouterLink} to={link}>
        {name}
      </Link>
    </h1>
  );
};

export default CardGame;
