// Action Types
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";

// Action Creators
export const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const addEmployeeSuccess = (employee) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: employee,
});

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:9000/api/getEmployees");
      const data = await response.json();
      if (data.success) {
        dispatch(fetchEmployeesSuccess(data.data));
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
};

//==================================================================================//

export const addEmployees = (newEmployee) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:9000/api/addEmployees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
      const data = await response.json();
      if (data.success) {
        dispatch(addEmployeeSuccess(data.newEmployee));
        dispatch(fetchEmployees()); // Refetch the list of employees
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
};
