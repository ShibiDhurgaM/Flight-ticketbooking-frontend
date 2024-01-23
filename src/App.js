import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Travelers/Gallery";
import Destination from "./Components/Destinations/Home";
import Features from "./Components/Features/Features";
import Explore from "./Components/Singlepage/Singlepage";
import Contact from "./Components/Contact/Contact";
import Contactus from "./Components/Contact/Contactus";
import Loginpage from "./Components/Loginpage/Loginpage";
import Signup from "./Components/Loginpage/Signup";
import Book from "./Components/Bookings/Book";
import dashboard from "./Components/Dashboard/dashboard";
import Flightdetails from "./Components/FlightDetails/Flightdetails";
import Payment from  "./Components/Payment/Payment";
import  PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import { useState } from "react";
function App()
{

  const[isAuthenticated,setIsAuthenticated]=useState(false);
  return(
    <>
    <Router>
    <Navbar/>
     <Switch >
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' exact component={About}></Route>
      <Route path='/our-gallery' exact component={Gallery}></Route>
      <Route path='/where-we-fly' exact component={Destination}></Route>
      <Route path='/singlepage/:id' exact component={Explore}></Route>
      <Route path='/features' exact component={Features}></Route>
      <Route path='/ask-your-queries' exact component={Contact}></Route>
      <Route path='/contact' exact component={Contactus}></Route>
      <Route path='/login' 
      exact
      render={(props) => (
        <Loginpage {...props} setIsAuthenticated={setIsAuthenticated} />
      )} ></Route>
      <Route path='/sign-up' exact component={Signup}></Route>     
      <Route path='/dashboard' exact component={dashboard}></Route>
      <Route path="/flightdetails" exact component={Flightdetails}></Route>
      <Route path="/payment" exact component={Payment}></Route>
      <PrivateRoute 
      path='/booking' 
      exact component={Book}
      isAuthenticated={isAuthenticated}
      ></PrivateRoute>
     </Switch>
    </Router>
   
    </>
  )
}


export default App;
