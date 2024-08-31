import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectSummary from "./pages/ProjectSummary";
import UserDetails from "./pages/UserDetails";
import "antd/dist/reset.css"; // Make sure to include this for antd styles
import { getUsers } from "./services/user-service";
import { mapUsersToProjects } from "./utils/utils";

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
  const [projects, setProjects] = useState([]);
  const [projectToUserMapping, setProjectToUserMapping] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("selectedProject:", selectedProject);
  console.log("selectedUser:", selectedUser);

  useEffect(() => {
    getUsers().then((data) => {
      const projectToUserMapping = mapUsersToProjects(data.users);
      setProjectToUserMapping(projectToUserMapping);
      setProjects(
        Object.keys(projectToUserMapping).map((name) => ({ id: name, name }))
      );
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              projects={projects}
              setSelectedProject={setSelectedProject}
            />
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <ProjectSummary
              projects={projects}
              projectToUserMapping={projectToUserMapping}
              setSelectedUser={setSelectedUser}
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
