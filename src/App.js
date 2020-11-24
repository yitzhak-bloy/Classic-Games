import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from './Navigation/Header';
import GsmeBoard from './pages/GameBoard';
import Form from './pages/Form';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact >
          <GsmeBoard />
        </Route>
        <Route path='/form' >
          <Form />
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
