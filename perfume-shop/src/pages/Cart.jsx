const Cart = ({ cartItems = [], onRemove, onQuantityChange }) => {
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-4 gap-4"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 border rounded-l"
                    onClick={() =>
                      onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded-r"
                    onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="ml-4 text-red-500 hover:underline"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-6">
            <span className="font-bold text-lg">Total: ₹{getTotalPrice()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
