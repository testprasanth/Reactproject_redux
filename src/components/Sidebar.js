import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#7c713f",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" noWrap>
          Employee Details
        </Typography>
      </Box>
      <List>
        {[
          { text: "Dashboard", path: "/" },
          { text: "Get EmployeeDetails", path: "/employeelist" },
          { text: "Add EmployeeDetails", path: "/addemployee" },
          { text: "Update EmployeeDetails", path: "/update" },
        ].map((item, index) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* Logout Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        sx={{ position: "absolute", bottom: 20, width: "100%" }}
      >
        Logout
      </Button>
    </Drawer>
  );
};

export default Sidebar;
