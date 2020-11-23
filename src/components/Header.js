import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Statistics",
    href: "/statistics",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  }
}));

const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
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

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

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
          <Typography variant="h6" component="h1" className={logo}>
            Femmecubator
          </Typography>
        </div>
      </Toolbar>
    );
  };
                     
  return (
    <header>
      <AppBar className={header} >
        {mobileView ? 
          displayMobile()
          :
          <Toolbar className={toolbar}>
            <Typography variant="h6" component="h1" className={logo}>
              Femmecubator
            </Typography>
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
        }
      </AppBar>
      <Toolbar />
      <Toolbar />
    </header>
  );
}

export default Header;