import { combineReducers } from "redux";

const isAuthentication = (state = false, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return true;
    case "LOGOUT_SUCCESS":
      return false;
    default:
      return state;
  }
};
const user = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return action.payload.userData || {};
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
};
const token = (state = null, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return action.payload.token;
    case "LOGOUT_SUCCESS":
      return null;
    default:
      return state;
  }
};
const error = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  isAuthentication,
  user,
  token,
  error
});
