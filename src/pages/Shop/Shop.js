import React, { useContext } from "react";
import Title from "../../components/Title/Title";
import { ProductContext } from "../../context/ProductContext";
import Product from "../../components/Product/Product";

import "./Shop.css";

const Shop = () => {
  const { productItems } = useContext(ProductContext);
  return (
    <div className="shop">
      <Title title="Shop" description="Order your favorite cosmetics..." />
      <div className="shop__products">
        {productItems.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
