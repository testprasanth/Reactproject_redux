// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/actions/authActions";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   CircularProgress,
//   Alert,
//   Box,
// } from "@mui/material";

// const Login = () => {
//   const [empName, setEmpName] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(empName, password));
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mt={5}
//         p={3}
//         border={1}
//         borderRadius={2}
//         borderColor="grey.300"
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//           <TextField
//             label="Employee Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={empName}
//             onChange={(e) => setEmpName(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: "16px" }}
//           >
//             Login
//           </Button>
//         </form>
//         {auth.loading && <CircularProgress style={{ marginTop: "16px" }} />}
//         {auth.error && (
//           <Alert severity="error" style={{ marginTop: "16px" }}>
//             {auth.error}
//           </Alert>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
import {
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [empName, setEmpName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(empName, password));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={5}
        p={3}
        border={1}
        borderRadius={2}
        borderColor="grey.300"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          HR Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Employee Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Login
          </Button>
        </form>
        {auth.loading && <CircularProgress style={{ marginTop: "16px" }} />}
        {auth.error && (
          <Alert severity="error" style={{ marginTop: "16px" }}>
            {auth.error}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Login;
