const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
