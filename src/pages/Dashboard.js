import React from "react";
import { Typography, Row, Col } from "antd";
import ProjectDropdown from "../components/ProjectDropdown";

const { Title } = Typography;

const Dashboard = ({ projects, setSelectedProject }) => {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <Row justify="center" align="top">
        <Col>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Select a Project
          </Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <ProjectDropdown
              projects={projects}
              setSelectedProject={setSelectedProject}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
