import React from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const ProjectDropdown = ({ projects }) => {
  const navigate = useNavigate();

  const handleChange = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Select
      style={{ width: 300 }}
      placeholder="Select a Project"
      onChange={handleChange}
    >
      {projects.map((project) => (
        <Option key={project.id} value={project.id}>
          {project.name}
        </Option>
      ))}
    </Select>
  );
};

export default ProjectDropdown;
