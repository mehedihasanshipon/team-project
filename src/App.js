import Home from './components/Home/Home/Home';
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
  );
}

export default App;
