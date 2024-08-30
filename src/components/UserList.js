import React from "react";
import { Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UserList = ({ users }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const columns = [
    {
      title: "GitHub ID",
      dataIndex: "githubId",
      key: "githubId",
    },
    {
      title: "Accepted Suggestions",
      dataIndex: "suggestionsAccepted",
      key: "suggestionsAccepted",
    },
    {
      title: "Last Active Date",
      dataIndex: "lastActiveDate",
      key: "lastActiveDate",
    },
  ];

  const handleRowClick = (record) => {
    navigate(`/projects/${projectId}/users/${record.id}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      pagination={false}
      style={{ marginTop: 20 }}
    />
  );
};

export default UserList;
