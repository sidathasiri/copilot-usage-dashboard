import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Typography, Row, Col } from "antd";
import { BulbOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

const UserDetails = ({ user }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  if (!user || user.githubId !== userId) {
    return <div>User not found!</div>;
  }

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button
        type="primary"
        onClick={handleBack}
        style={{ marginBottom: "20px" }}
      >
        Back to Project Summary
      </Button>
      <Title level={2} style={{ textAlign: "center", margin: "50px 0" }}>
        {user.githubId}
      </Title>

      <Row gutter={16} justify="center" style={{ marginTop: "20px" }}>
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
              NA
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
              {user.totalAcceptedCount}
            </Text>
          </Card>
        </Col>
      </Row>

      <Card title="Total Accepted Suggestions" style={{ marginTop: 20 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={user.usageOverTime}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default UserDetails;
