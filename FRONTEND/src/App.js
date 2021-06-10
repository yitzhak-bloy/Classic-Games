import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./components/navigation-components/Header";
import TicTacToe from "./pages/ticTacToe/TicTacToe";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Statistics from "./pages/Statistics";
import Homepage from "./pages/Homepage";
import Snake from "./pages/snake/Snake";
import MatchingCard from "./pages/matchingCard/MatchingCard";
import { UserContextProvider } from "./shared/context/User-context";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/ticTacToe'>
            <TicTacToe />
          </Route>
          <Route path='/snake'>
            <Snake />
          </Route>
          <Route path='/matchingCard'>
            <MatchingCard />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/signUp'>
            <SignUp />
          </Route>
          <Route path='/statistics'>
            <Statistics />
          </Route>
          <Redirect to='./' />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
