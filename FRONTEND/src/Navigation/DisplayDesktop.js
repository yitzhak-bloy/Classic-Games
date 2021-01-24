import {
  Toolbar,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const DisplayDesktop = (headersData, useStyles) => {
  const { logo, menuButton, toolbar } = useStyles();

  return (
    <Toolbar className={toolbar}>
      <Link component={RouterLink} to="/" >
        <Typography variant="h6" component="h1" className={logo} >
          TicTacToeGame
          </Typography>
      </Link>
      <div>
        {headersData.map(({ label, href }) => {
          return <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton
            }}
          >
            {label}
          </Button>
        })}
      </div>
    </Toolbar>
  )
};

export default DisplayDesktop;