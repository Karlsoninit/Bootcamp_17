import axios from "axios";

export const register = registerForm => async dispatch => {
  console.log("operation", registerForm);
  const data = await axios.post(
    "https://slim-moms.goit.co.ua/api/v1/register",
    registerForm,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  dispatch({ type: "REGISTER_SUCCESS", payload: data.data.user });
  console.log(data);
};

export const login = registerForm => async dispatch => {
  console.log("operation", registerForm);
  const data = await axios.post(
    "https://slim-moms.goit.co.ua/api/v1/login",
    registerForm,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  dispatch({ type: "LOGIN_SUCCESS", payload: data.data.user });
  console.log(data);
};

export const logOut = () => async (dispatch, getState) => {
  console.log(getState().auth.token);

  // const data = await axios.post("https://slim-moms.goit.co.ua/api/v1/logout", {
  //   headers: { Authorization: getState().auth.token }
  // });

  // console.log("logout", data);
  dispatch({ type: "LOGOUT_SUCCESS" });
};

// export const login = () => dispatch => {};
