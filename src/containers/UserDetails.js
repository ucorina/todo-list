import { connect } from "react-redux";
import { login, logout } from "../actions/user";
import UserDetails from "../components/UserDetails";

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  displayName: state.user.details ? state.user.details.displayName : "",
  isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  onLoginClicked: () => dispatch(login()),
  onLogoutClicked: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
