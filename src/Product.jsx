import React, { useEffect, useState } from "react";
import getProduct from "./ProductServices.jsx";
import ProductList from "./ProductList.jsx";

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
      </div>
    );
};
export default Product;