import axios from "axios";

export const login = (emp_name, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const response = await axios.post("http://localhost:9000/api/login", {
      emp_name,
      password,
    });

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.message,
    });
  }
};
