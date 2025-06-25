import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Perfume Details</h2>
      <p>Product ID: {id}</p>
      {/* Later: fetch and display actual product data */}
    </div>
  );
};

export default ProductDetail;
