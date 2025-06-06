import React, { useEffect, useState } from "react";
import getProduct from "./ProductServices.jsx";

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
  
      try {
        const fetchedProduct = await getProduct(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        console.error("Error:", err);
      }
    };
  
    fetchProduct();
  }, [productId]);
  

  if (!product) {
    return <p>Loading product...</p>;
  }
  console.log('Rendering Product component with product:', product);
  return (
      <div>
        <h2>{product["Name"]}</h2>
        <p>{product["Description "]}</p>
        <p><strong>Product ID:</strong> {product["Product-Id"]}</p>
        <img
        src="https://images.unsplash.com/photo-1600180758890-6f3b9ad1162f?w=500&auto=format&fit=crop&q=60"
         alt={product["Name"]}
        width="200"
        />
      </div>
    );
};
export default Product;