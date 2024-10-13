const ProductCard = ({ product, cartItems, addToCart, removeFromCart }) => {
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>

      {inCart ? (
        <button
          className="bg-red-500 text-white p-2 mt-2"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white p-2 mt-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
