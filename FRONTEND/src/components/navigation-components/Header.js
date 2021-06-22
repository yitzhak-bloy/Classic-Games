import { useState, useEffect, useContext } from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import DisplayDesktop from "./DisplayDesktop";
import DisplayMobile from "./DisplayMobile";
import { UserContext } from "../../shared/context/User-context";

const headersData = [
  {
    label: "Statistics",
    href: "/statistics",
  },
  {
    label: "Log In",
    href: "/Login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#264653",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#efd595",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    color: "#efd595",
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    color: "#efd595",
    backgroundColor: "#264653",
    padding: "20px 30px",
    height: "100%",
  },
}));

const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  const { header } = useStyles();

  const userContext = useContext(UserContext);

  const handelLogout = () => {
    userContext.setEmail("");
    localStorage.removeItem("userData");
  };

  if (userContext.email) {
    headersData[1].label = "Log Out";
    headersData[1].href = "/";
    headersData[1].onClick = handelLogout;
  } else {
    headersData[1].label = "Log In";
    headersData[1].href = "/Login";
    headersData[1].onClick = undefined;
  }

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const displayDesktop = DisplayDesktop(headersData, useStyles);
  const displayMobile = DisplayMobile(
    headersData,
    useStyles,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose
  );

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
      <AppBar className={header}>
        {mobileView ? displayMobile : displayDesktop}
      </AppBar>
      <Toolbar />
    </header>
  );
};

export default Header;
