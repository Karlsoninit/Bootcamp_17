import React from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { useRouter } from "./routes";
const App = ({ isAuth }) => {
  console.log("isAuth", isAuth);
  const router = useRouter(isAuth);
  return (
    <Router>
      <Navigation />
      {router}
    </Router>
  );
};

const mSTP = state => ({
  isAuth: state.auth.isAuthentication
});

export default connect(mSTP)(App);
