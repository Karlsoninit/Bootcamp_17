import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./routes";
import db from "./config/fbConfig";

const App = () => {
  const [isAuth, setIasAuth] = useState(false);

  useEffect(() => {
    db.auth().onAuthStateChanged(setIasAuth);
  }, []);

  const router = useRouter(isAuth);
  return (
    <Router>
      <Navigation auth={isAuth} />
      {router}
    </Router>
  );
};

export default App;
