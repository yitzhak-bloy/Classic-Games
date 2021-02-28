import { Link as RouterLink } from "react-router-dom";

import { Link } from "@material-ui/core";

const Homepage = () => {
  return (
    <h1>
      To the
      <Link component={RouterLink} to="/ticTacToe" >
        TicTacToe
      </Link>
    </h1>
  )
}

export default Homepage;