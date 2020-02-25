import { combineReducers } from "redux";

const isAuthentication = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const user = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const token = (state = null, action) => {
  switch (action.type) {
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
