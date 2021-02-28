import { useState, useEffect } from 'react';
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
import Homepage from './pages/Homepage';
import { UserContext } from './shared/context/User-context';

const App = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setEmail(storedData.email);
    }
  }, [])

  return (
    <UserContext.Provider value={{
      email: email,
      setEmail: email => setEmail(email)
    }} >
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact >
            <Homepage />
          </Route>
          <Route path='/ticTacToe' >
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
