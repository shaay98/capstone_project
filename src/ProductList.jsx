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

  return (
    <div className="product-list">
  {products.map((product) => {
    const name = product.Name || product["Name "] || "Unnamed Product";
    const description = product.Description || product["Description "] || "No description.";
    const price = product.Price || "0.00";
    const imgUrl = product.imgUrl?.replace(/["\n\r]/g, '').trim();

    return (
      <div key={product["Product-Id"]} className="product-card">
        <h3>{name}</h3>
        {imgUrl && (
          <img
            src={imgUrl}
            alt={name}
            width="200"
          />
        )}
        <p>{description}</p>
        <p><strong>${price}</strong></p>
        <Link to={`/product/${product["Product-Id"]}`}>View Product</Link>
      </div>
    );
  })}
</div>

  );
};
export default ProductList;
