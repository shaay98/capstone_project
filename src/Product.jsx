import React, { useEffect, useState } from "react";
import { getProduct } from './productServices.jsx';


const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src='https://images.unsplash.com/photo-1747170934284-4d7487375f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdGVzdCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D' alt={product.name} width="200" />
    </div>
  );
};
export default Product;
