import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/operations/authOperations";
import db from "../../config/fbConfig";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Navigation({ auth }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to="/register"></Link>
          {auth ? (
            <>
              <Button color="inherit" onClick={() => db.auth().signOut()}>
                LogOut
              </Button>
              <Button component={Link} color="inherit" to={"/createUser"}>
                CREATE
              </Button>
            </>
          ) : (
            <>
              <Link to="/Login">
                <Button color="inherit">Login</Button>
              </Link>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
