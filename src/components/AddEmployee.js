import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployees } from "../redux/actions/employeeActions";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AddEmployee = () => {
  const [emp_name, setEmpName] = useState("");
  const [position, setPosition] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [domain, setDomain] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      emp_name,
      position,
      blood_group,
      password,
      phone_number,
      domain,
    };
    await dispatch(addEmployees(newEmployee));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={emp_name}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Position"
              variant="outlined"
              fullWidth
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="blood_group"
              variant="outlined"
              fullWidth
              value={blood_group}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Domain"
              variant="outlined"
              fullWidth
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" variant="contained" color="primary">
              Add Employee
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>Employee added successfully!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddEmployee;
