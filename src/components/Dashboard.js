import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import "./Dashboard.css"; // Create and import a CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
