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
import Book from './Components/Bookings/Book/Book';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingHolder from './Components/Bookings/Book/BookingHolder';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState([])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
              <Navigation></Navigation>

              <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <PrivateRoute path="/bookings">
                      <Bookings></Bookings>
                  </PrivateRoute>
                  <PrivateRoute path="/admin">
                    <Admin></Admin>
                  </PrivateRoute>
                  <PrivateRoute path="/checkout">
                    <BookingHolder></BookingHolder>
                  </PrivateRoute>
                  
              </Switch>
          </Router>
    </UserContext.Provider>
    
  );
}

export default App;
