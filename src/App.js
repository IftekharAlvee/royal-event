import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Components/Landing/Navigation/Navigation';
import Bookings from './Components/Bookings/Bookings';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>
            <Navigation></Navigation>

            <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/bookings">
                    <Bookings></Bookings>
                </Route>
                <Route path="/admin">
                  <Admin></Admin>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
