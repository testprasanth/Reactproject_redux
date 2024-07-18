// import React from "react";
// import Login from "./components/Login";

// const App = () => {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/dashboard" element={<Dashboard />} />\{" "}
      </Routes>
    </Router>
  );
};

export default App;
