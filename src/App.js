import Home from './components/Home/Home/Home';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubHouseDetails from './components/Home/Home/House/SubHouseDetails';


function App() {
  return (
    <div>
    <Router>
    <Switch>
      <Route path="/details/:cardId">
      <SubHouseDetails></SubHouseDetails>
      </Route>
      <Route exact path="/">
      <Home />
      </Route>
    </Switch>
    </Router>

    </div>
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        
        <Route>
          <Login />
        </Route>
      </Switch>
     
    </Router>
>>>>>>> b22fbc4121f29a9eab1167f7ac83d0026d4d037e
  );
}

export default App;
