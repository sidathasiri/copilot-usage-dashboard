import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProjectSummary from "./pages/ProjectSummary";
import UserDetails from "./pages/UserDetails";
import "antd/dist/reset.css"; // Make sure to include this for antd styles
import { getUsers } from "./services/user-service";
import { mapUsersToProjects } from "./utils/utils";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectToUserMapping, setProjectToUserMapping] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

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
          element={<UserDetails user={selectedUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
