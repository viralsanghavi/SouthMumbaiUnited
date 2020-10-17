import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from './Components/About/AboutUs';
import Contact from './Components/contact';
// import NavTeam from './Components/gallery/navigateTeam';
import Staff from './Components/staff';
import Home from './Components/home';
import PageNotFound from './PageNotFound';
import Footermain from './Components/Footermain';
import ScrollToTop from './scrollonRoute'
import Players from './Components/Players/Players';
import GirlsTeam from './Components/Players/GirlsTeam';
import BoysTeam from './Components/Players/BoysTeam';
import LoginToForm from './Components/Login/LoginToForm';
import Signin from './Components/Players/SignIn';
import { BuyNow } from './Components/gallery/BuyNow';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Splash from './Splash'
import './App.css';


const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  setTimeout(() => {
    setIsLoading(false);

  }, 1000);

  if (isLoading) {
    return <Splash />;
  }


  return (
    <BrowserRouter>
      <div className="page-container" >
        <NavBar />
        <ToastContainer />
        <Switch>
          <Route exact path='/about'>
            <ScrollToTop />
            <AboutUs />
          </Route>
          <Route exact path='/team'>
            <ScrollToTop />
            <Players />
          </Route>
          <Route exact path='/contact'>
            <ScrollToTop />
            <Contact />
          </Route>
          <Route exact path='/blog'>

            <ScrollToTop />
            <BuyNow />
          </Route>
          <Route exact path='/buyNow'>
            <ScrollToTop />
            <BuyNow />
          </Route>
          <Route exact path='/staff'>
            <ScrollToTop />
            <Staff />
          </Route>
          <Route exact path='/loginUser'>
            <Signin />
          </Route>
          <Route exact path='/records'>
            <LoginToForm />
          </Route>
          <Route exact path='/'>
            <ScrollToTop />
            <Home />
          </Route>
          <Route exact path='/team/boysteam'>
            <BoysTeam />
          </Route>
          <Route exact path='/team/girlsteam'>
            <GirlsTeam />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footermain />
      </div>
    </BrowserRouter>
  )
}


export default App;
