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

function Navigation({ logOut, isAuth }) {
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
          {!isAuth ? (
            <>
              <Link to="/Login">
                <Button color="inherit">Login</Button>
              </Link>

              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => logOut()}>
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mSTP = state => ({
  isAuth: state.auth.isAuthentication
});

export default connect(mSTP, { logOut })(Navigation);
