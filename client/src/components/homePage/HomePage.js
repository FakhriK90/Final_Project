import React from "react";
import NavigationClient from "../navigation/NavigationClietn";
import ProductListClient from "../productList/ProductListClient";


const HomePage = () => {
  return (
    <div>
      <NavigationClient/>
      <ProductListClient/>
    </div>
  );
};

export default HomePage;
