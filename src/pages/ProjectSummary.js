import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Typography, Row, Col } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import UsageChart from "../components/UsageChart";
import UserList from "../components/UserList";
import { getUsersMetrics } from "../services/user-service";
import { countMetricPerDay } from "../utils/utils";

const { Title, Text } = Typography;

const summaryData = [
  { title: "Total Suggestions", value: 1240 },
  { title: "Accepted Suggestions", value: 850 },
  { title: "Active Users", value: 25 },
];

const ProjectSummary = ({
  projects,
  projectToUserMapping,
  setSelectedUser,
}) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const users = useMemo(
    () => projectToUserMapping[projectId] || [],
    [projectToUserMapping, projectId]
  );
  const project = projects.find((p) => p.id === projectId);
  const [metrics, setMetrics] = useState({});
  const [metricsByDate, setMetricsByDate] = useState({});
  console.log("metricsByDate:", metricsByDate);

  useEffect(() => {
    getUsersMetrics(
      users.map((user) => user.githubId),
      "ghostText.accepted"
    ).then((data) => {
      console.log("received metrics:", data);
      setMetrics(data);
      setMetricsByDate(countMetricPerDay(data.data));
    });
  }, [users]);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  // Sample data for cards (replace with actual data from summaryData)
  const totalSuggestions = summaryData.totalSuggestions || 'NA';
  const acceptedSuggestions = summaryData.acceptedSuggestions || 0;
  const activeUsers = users.length || 0;

  return (
    <div style={{ padding: "20px" }}>
      <Button
        type="primary"
        onClick={handleBack}
        style={{ marginBottom: "20px" }}
      >
        Back to Dashboard
      </Button>
      <Title level={2}>Summary for {project.name}</Title>

      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card
            title="Total Suggestions"
            bordered={false}
            style={{ backgroundColor: "#e6f7ff", borderColor: "#91d5ff" }}
            extra={
              <BulbOutlined style={{ color: "#1890ff", fontSize: "24px" }} />
            }
          >
            <Text strong style={{ fontSize: "24px", color: "#1890ff" }}>
              {totalSuggestions}
            </Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Total Accepted Suggestions"
            bordered={false}
            style={{ backgroundColor: "#e6ffed", borderColor: "#b7eb8f" }}
            extra={
              <CheckCircleOutlined
                style={{ color: "#52c41a", fontSize: "24px" }}
              />
            }
          >
            <Text strong style={{ fontSize: "24px", color: "#52c41a" }}>
              {acceptedSuggestions}
            </Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Active Users"
            bordered={false}
            style={{ backgroundColor: "#fff0f6", borderColor: "#ffadd2" }}
            extra={
              <UserOutlined style={{ color: "#eb2f96", fontSize: "24px" }} />
            }
          >
            <Text strong style={{ fontSize: "24px", color: "#eb2f96" }}>
              {activeUsers}
            </Text>
          </Card>
        </Col>
      </Row>

      {metricsByDate && (
        <UsageChart data={metricsByDate} style={{ marginTop: "20px" }} />
      )}
      <Title level={3}>Team Members</Title>
      <UserList
        users={users}
        style={{ marginTop: "20px" }}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default ProjectSummary;
