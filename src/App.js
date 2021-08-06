import { createContext, useState }from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import './App.css';
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Shared/Navbar/Navbar";
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext([]);
function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div className="border-2">
      </div>
      <Navbar ></Navbar>
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
        
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>

        <PrivateRoute path="/serviceDetails/:serviceCode">
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        <PrivateRoute path="/checkOut/:serviceCode">
          <CheckOut></CheckOut>
        </PrivateRoute>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
        
      </Switch>
      <Footer></Footer>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
