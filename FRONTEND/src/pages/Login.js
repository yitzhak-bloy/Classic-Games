import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import PopsUp from '../shared/components/PopsUp';
import { UserContext } from '../shared/context/User-context';
import { useHttpClient } from '../shared//hooks/http-hook';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);

  const { paper, avatar, form, submit } = useStyles();
  const { loading, error, sendRequest, handleClosePopsUp } = useHttpClient();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const loginSubmitHandler = async event => {
    event.preventDefault()

    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/userStatistics/login',
        'POST',
        JSON.stringify({
          email: user.email,
          password: user.password
        }),
        {
          'Content-Type': 'application/json'
        },
      );

      userContext.setEmail(responseData.email);
      localStorage.setItem('userData', JSON.stringify({ email: responseData.email }))
      history.push("/");
    } catch (err) { }
  }

  const handelChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      {error && <PopsUp open={error} handleClose={handleClosePopsUp} description={error} />}
      {loading && <LoadingSpinner asOverlay />}
      <CssBaseline />
      <div className={paper}>
        <Avatar className={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={form} noValidate onSubmit={loginSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handelChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handelChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="signUp" variant="body2" component={RouterLink}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;