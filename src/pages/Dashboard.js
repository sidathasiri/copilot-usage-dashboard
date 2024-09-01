import React from "react";
import { Typography, Row, Col, Spin } from "antd";
import ProjectDropdown from "../components/ProjectDropdown";

const { Title } = Typography;

const Dashboard = ({ projects }) => {  
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
        {!projects || projects.length === 0 ? (
          <Spin tip="Loading">
            <div
              style={{
                padding: 50,
                background: "rgba(0, 0, 0, 0.05)",
                borderRadius: 4,
              }}
            />
          </Spin>
        ) : (
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
              <ProjectDropdown projects={projects} />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Dashboard;
