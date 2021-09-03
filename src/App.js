import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Contact from "./Components/Contact/contact";
import Staff from "./Components/Staff/staff";
import Home from "./Components/Home/home";
import PageNotFound from "./PageNotFound";
import Footermain from "./Components/Footer/Footermain";
import ScrollToTop from "./scrollonRoute";
import Players from "./Components/Players/Players";
import GirlsTeam from "./Components/Players/GirlsTeam";
import BoysTeam from "./Components/Players/BoysTeam";
import LoginToForm from "./Components/Login/LoginToForm";
import Signin from "./Components/Players/SignIn";
import { BuyNow } from "./Components/gallery/BuyNow";
import { ToastContainer } from "react-toastify";
import Splash from "./Splash";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  document.title = "South Mumbai United";
  document.getElementsByTagName("META")[2].content =
    "South Mumbai United is a football club based in Mumbai that encourages and develops players in the city by ensuring quality training in a supporting and friendly environment.";

  const URLS = [
    { uri: "/about", component: <AboutUs /> },
    { uri: "/team", component: <Players /> },
    { uri: "/contact", component: <Contact /> },
    { uri: "/blog", component: <BuyNow /> },
    { uri: "/buy-now", component: <BuyNow /> },
    { uri: "/staff", component: <Staff /> },
    { uri: "/login", component: <Signin /> },
    { uri: "/records", component: <LoginToForm /> },
    { uri: "/home", component: <Home /> },
    { uri: "/", component: <Home /> },
    { uri: "/team/boysteam", component: <BoysTeam /> },
    { uri: "/team/girlsteam", component: <GirlsTeam /> },
    { uri: "/*", component: <PageNotFound /> },
  ];
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <BrowserRouter>
      <div className="page-container">
        <NavBar />
        <ToastContainer />
        <Switch>
          {URLS.map((r, index) => (
            <Route exact path={r.uri} key={index}>
              {r.component}
              <ScrollToTop />
            </Route>
          ))}
        </Switch>
        <Footermain />
      </div>
    </BrowserRouter>
  );
};

export default App;
