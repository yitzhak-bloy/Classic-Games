import {
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";


const DisplayMobile = (headersData, useStyles, drawerOpen, handleDrawerOpen, handleDrawerClose) => {
  const { logo, drawerContainer } = useStyles();

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <Toolbar>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div className={drawerContainer}>{getDrawerChoices()}</div>
      </Drawer>
      <div>
        <Link component={RouterLink} to="/" >
          <Typography variant="h6" component="h1" className={logo}>
            TicTacToeGame
          </Typography>
        </Link> 
      </div>
    </Toolbar>
  );
};

export default DisplayMobile