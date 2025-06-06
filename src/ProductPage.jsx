import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product.jsx';


const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <Product productId={productId} />
    </div>
  );
};
console.log("Product ID from URL:");
export default ProductPage;