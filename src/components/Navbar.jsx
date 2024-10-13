import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  // Calculate total quantity in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Our Products</h1>
      <Link to="/cart" className="bg-blue-500 p-2 rounded flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.344 1.038m1.703 5.122h11.302a1 1 0 00.987-.834l1.285-6.43a1 1 0 00-.987-1.165H6.387M8.045 8H5.387m-.387 0l-1.366 6.834A2 2 0 005.988 17h11.553a2 2 0 001.965-1.582l1.105-5.418a1 1 0 00-.987-1.165H6.045M8 21h2m4-2h2M10 21H8m0 0v-2m0 2v2"
          />
        </svg>
        <span>{cartCount}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
