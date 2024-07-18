import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeeActions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  // State for pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  // Pagination logic
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Calculate pagination offsets
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employee List</h1>
      <TableContainer component={Paper}>
        <Table aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.slice(startIndex, endIndex).map((employee) => (
              <TableRow key={employee.emp_id}>
                <TableCell>{employee.emp_name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.blood_group}</TableCell>
                <TableCell>{employee.phone_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        count={Math.ceil(employees.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default EmployeeList;
