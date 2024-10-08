import React from "react";
import { Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UserList = ({ users, setSelectedUser }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const columns = [
    {
      title: "GitHub ID",
      dataIndex: "githubId",
      key: "githubId",
      width: "33%",
    },
    {
      title: "Total Accepted Count",
      dataIndex: "totalAcceptedCount",
      key: "totalAcceptedCount",
      width: "33%",
    },
    {
      title: "Machine ID",
      dataIndex: "machineId",
      key: "machineId",
      width: "33%",
    },
  ];

  const handleRowClick = (record) => {
    setSelectedUser(record);

    navigate(`/projects/${projectId}/users/${record.githubId}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="githubId"
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      pagination={false}
      style={{ marginTop: 20 }}
    />
  );
};

export default UserList;
