import { Space } from "antd";
import React from "react";
import RestaurantCard from "../RestaurantCard";
import "./index.scss";

const CardContainer = () => {
  return (
    <Space className="cards-container">
      {[1, 2, 3, 4].map((item) => (
        <RestaurantCard />
      ))}
    </Space>
  );
};

export default CardContainer;
