import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

const UserDetails = ({ user, usageData }) => {
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
      <Card title={`Details for ${user.githubId}`} style={{ marginTop: 20 }}>
        <Title level={4}>GitHub ID: {user.githubId}</Title>
        <Text>Accepted Suggestions: {user.totalAcceptedCount}</Text>
      </Card>
      <Card title="User Activity Over Time" style={{ marginTop: 20 }}>
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
