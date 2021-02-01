import { useState } from 'react';
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
import { UserContext } from './shared/context/User-context';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{
      user: user,
      setUser: currentUser => setUser(currentUser)
    }} >
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
    </UserContext.Provider>
  )
}

export default App;
