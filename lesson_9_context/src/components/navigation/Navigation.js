import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";

const Navigation = () => (
  <HomeContext.Consumer>
    {state => {
      console.log("state : ", state);
      return (
        <ul>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              to="/register"
            >
              register
            </NavLink>
          </li>
        </ul>
      );
    }}
  </HomeContext.Consumer>
);

export default Navigation;
