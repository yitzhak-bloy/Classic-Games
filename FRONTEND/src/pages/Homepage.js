import { Link as RouterLink } from "react-router-dom";

import { Link } from "@material-ui/core";

const Homepage = () => {
  return (
    <div>
      <h1>
        To the <Link component={RouterLink} to="/ticTacToe" >TicTacToe game</Link>
      </h1>
      <h1>
        To the <Link component={RouterLink} to="/snake" >Snake game</Link>
      </h1>
    </div>
  )
}

export default Homepage;