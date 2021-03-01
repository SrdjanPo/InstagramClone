import React from "react";
//import { Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <Router>
        <nav>
          <div className="insta-logos"></div>
          <img
            id="nav-logo"
            src="https://i0.wp.com/voxeuropae.com/wp-content/uploads/2019/02/SKq9yH-black-and-white-instagram-logo-png.png?fit=1200%2C1200&ssl=1&w=640"
          ></img>
          <div class="vl"></div>
          <img
            id="nav-logo-text"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png"
          ></img>
          <button onClick={handleLogout}>Logout</button>
          <input id="searchInput" type="text" placeholder="Search.."></input>
          <img
            className="nav-icons"
            src="https://icons-for-free.com/iconfiles/png/512/home-131964784858199667.png"
          ></img>
          <img
            className="nav-icons"
            src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"
          ></img>
          <img
            className="nav-icons"
            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/header-account-image-line-512.png"
          ></img>
        </nav>
        <Route path="/home" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile" component={Profile} />
      </Router>
    </section>
  );
};
export default Hero;
