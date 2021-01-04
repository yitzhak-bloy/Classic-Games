import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from './Navigation/Header';
import GsmeBoard from './pages/GameBoard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact >
          <GsmeBoard />
        </Route>
        <Route path='/Login' >
          <Login />
        </Route>
        <Route path='/signUp' >
          <SignUp />
        </Route>
        <Route path='/statistics' >
          <Statistics />
        </Route>
        <Redirect to='./' />
      </Switch>
    </Router>
  )
}

export default App;
