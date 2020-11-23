import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

import DisplayDesktop from './DisplayDesktop';
import DisplayMobile from './DisplayMobile';

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

  const { header } = useStyles();

  const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const displayDesktop = DisplayDesktop(headersData, useStyles);
  const displayMobile = DisplayMobile(headersData, useStyles, drawerOpen, handleDrawerOpen, handleDrawerClose);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
                     
  return (
    <header>
      <AppBar className={header} >
        {mobileView ? 
          displayMobile
          :
          displayDesktop
        }
      </AppBar>
      <Toolbar />
      <Toolbar />
    </header>
  );
}

export default Header;