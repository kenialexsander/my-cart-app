const CartItem = ({ item, updateCart }) => {
  return (
    <div className="flex justify-between items-center">
      <span>{item.title}</span>
      <span>{item.quantity}</span>
      <button
        onClick={() => updateCart(item.id, "remove")}
        className="bg-red-500 text-white p-2"
      >
        Remove
      </button>
      <button
        onClick={() => updateCart(item.id, "increase")}
        className="bg-green-500 text-white p-2"
      >
        +
      </button>
      <button
        onClick={() => updateCart(item.id, "decrease")}
        className="bg-yellow-500 text-white p-2"
      >
        -
      </button>
    </div>
  );
};

export default CartItem;
