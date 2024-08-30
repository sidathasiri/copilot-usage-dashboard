import React from "react";
import { Row, Col, Card } from "antd";

const SummaryCards = ({ data }) => {
  return (
    <Row gutter={16}>
      {data.map((item, index) => (
        <Col span={6} key={index}>
          <Card title={item.title} bordered={false}>
            <h2>{item.value}</h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SummaryCards;
