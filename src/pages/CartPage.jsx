import CartItem from "../components/CartItem";

const CartPage = ({ cartItems, updateCart }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} updateCart={updateCart} />
        ))
      )}
      <div className="mt-4">
        <p>Total: ${discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
