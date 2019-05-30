import React from "react";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import UserDetails from "../../containers/UserDetails";

const useStyles = makeStyles(() => ({
  userDetails: {
    marginLeft: "auto"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <UserDetails className={classes.userDetails} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
