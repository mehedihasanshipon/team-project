import Home from './components/Home/Home/Home';
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
  );
}

export default App;
