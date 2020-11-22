import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
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
}));

const Header = () => {
  const { header, logo, menuButton, toolbar } = useStyles();
                     
  return (
    <header>
      <AppBar className={header}>
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
      </AppBar>
    </header>
  );
}

export default Header;