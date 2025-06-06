import React, { useEffect, useState } from "react";
import { getAllProducts } from "./ProductServices";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const all = await getAllProducts();
        setProducts(all);
      } catch (err) {
        console.error("Error loading products:", err);
      }
    };

    fetchAll();
  }, []);

  console.log(products)
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product["Product-Id"]} className="product-card">
          <h3>{product.Name}</h3>
          <img
            src={product.imgUrl}
            alt={product.Name}
            width="200"
          />
          <p>{product.Description}</p>
          <p><strong>${product.Price}</strong></p>
          <Link to={`/product/${product["Product-Id"]}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
};
export default ProductList;