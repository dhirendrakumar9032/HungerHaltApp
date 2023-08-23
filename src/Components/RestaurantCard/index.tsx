import { Space, Image } from "antd";
import React from "react";
import "./index.scss";

const RestaurantCard = () => {
  return (
    <Space className="restaurant-card">
      <Image
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ds6nasa6qpxunkhglz5g"
        alt="iocn"
        preview={false}
      />
      <h3>Restaurant Name</h3>
      <h4>Dal MAkhani</h4>
      <h4>4.4 Start</h4>
      <h4>40 min</h4>
    </Space>
  );
};

export default RestaurantCard;
