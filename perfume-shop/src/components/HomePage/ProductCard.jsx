const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <div className="flex items-start space-x-1">
        <span className="text-[3] text-gray-600 mt-1">₹</span>
        <span className="text-xl font-bold text-gray-900">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
