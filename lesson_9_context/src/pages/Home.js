import React from "react";
import { withRouter } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";
import Navigation from "../components/navigation/Navigation";
import { ControllerContext } from "../context/ControllerContext";

const Home = props => {
  return (
    <ControllerContext.Consumer>
      {state => {
        console.log("theme home :", state);
        return (
          <HomeContext.Provider
            value={{
              state
            }}
          >
            <Navigation />
          </HomeContext.Provider>
        );
      }}
    </ControllerContext.Consumer>
  );
};

export default withRouter(Home);
