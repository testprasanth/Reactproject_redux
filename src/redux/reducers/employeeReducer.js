import { FETCH_EMPLOYEES_SUCCESS } from "../actions/employeeActions";
import { ADD_EMPLOYEE_SUCCESS } from "../actions/employeeActions";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

export default employeeReducer;
