import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  loginLink: {
    marginLeft: theme.spacing(2)
  }
}));

const UserDetails = ({
  className,
  isLoggedIn,
  displayName,
  isLoading,
  onLoginClicked,
  onLogoutClicked
}) => {
  const classes = useStyles();
  if (isLoading) {
    return <div className={className}>Loading ...</div>;
  }

  if (isLoggedIn) {
    return (
      <div className={className}>
        Hello {displayName}!
        <a
          href="#"
          className={classes.loginLink}
          onClick={() => onLogoutClicked()}
        >
          Log out
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        href="#"
        className={classes.loginLink}
        onClick={() => onLoginClicked()}
      >
        Log in
      </a>
    </div>
  );
};

export default UserDetails;
