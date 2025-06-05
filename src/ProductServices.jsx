
export const getProduct = async (productId) => {
    
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  