import { Space } from "antd";
import React from "react";
import Header from "./Components/HeaderComp";
import RestaurantCard from "./Components/RestaurantCard";
import CardContainer from "./Components/Container/card-container";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

export default App;
