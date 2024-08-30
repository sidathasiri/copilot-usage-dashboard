import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectSummary from "./pages/ProjectSummary";
import UserDetails from "./pages/UserDetails";
import "antd/dist/reset.css"; // Make sure to include this for antd styles

const projects = [
  { id: "1", name: "Project Alpha" },
  { id: "2", name: "Project Beta" },
  { id: "3", name: "Project Gamma" },
];

const summaryData = [
  { title: "Total Suggestions", value: 1240 },
  { title: "Accepted Suggestions", value: 850 },
  { title: "Active Users", value: 25 },
];

const usageData = [
  { date: "2024-08-25", count: 120 },
  { date: "2024-08-26", count: 135 },
  { date: "2024-08-27", count: 140 },
  { date: "2024-08-28", count: 150 },
  { date: "2024-08-29", count: 160 },
];

const users = [
  {
    id: "user-1",
    githubId: "user1",
    suggestionsAccepted: 150,
    lastActiveDate: "2024-08-29",
  },
  {
    id: "user-2",
    githubId: "user2",
    suggestionsAccepted: 120,
    lastActiveDate: "2024-08-28",
  },
  {
    id: "user-3",
    githubId: "user3",
    suggestionsAccepted: 90,
    lastActiveDate: "2024-08-27",
  },
  {
    id: "user-4",
    githubId: "user4",
    suggestionsAccepted: 85,
    lastActiveDate: "2024-08-26",
  },
  {
    id: "user-5",
    githubId: "user5",
    suggestionsAccepted: 60,
    lastActiveDate: "2024-08-25",
  },
];

const user = {
  id: "user-1",
  githubId: "user1",
  suggestionsAccepted: 150,
};

const userUsageData = [
  { date: "2024-08-25", count: 30 },
  { date: "2024-08-26", count: 35 },
  { date: "2024-08-27", count: 40 },
  { date: "2024-08-28", count: 45 },
  { date: "2024-08-29", count: 50 },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard projects={projects} />} />
        <Route
          path="/projects/:projectId"
          element={
            <ProjectSummary
              projects={projects}
              summaryData={summaryData}
              usageData={usageData}
              users={users}
            />
          }
        />
        <Route
          path="/projects/:projectId/users/:userId"
          element={<UserDetails user={user} usageData={userUsageData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
