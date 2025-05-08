import { FaBars, FaSearch, FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';
import { useAppContext } from "../contexts/ContextProvider";

function Navbar() {
  const { state, toggleSidebar } = useAppContext();
  const { isSidebarOpen } = state;

  return (
    <nav className="bg-white dark:bg-main-dark-bg p-4 ps-10 flex justify-between items-center shadow-md">
      {/* Left Side: List and Search Icons */}
      <div className="flex items-center space-x-4">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-blue-500  hover:text-blue-800 focus:outline-none"
            aria-label="Open Sidebar"
          >
            <FaBars size={24} />
          </button>
        )}
        <button
          className="text-blue-500  hover:text-blue-800 focus:outline-none"
          aria-label="Search"
        >
          <FaSearch size={24} />
        </button>
      </div>

      {/* Right Side: Cart, Message, Notification Icons */}
      <div className="flex items-center space-x-4">
        <button
          className="text-blue-500 hover:text-blue-800 focus:outline-none"
          aria-label="Cart"
        >
          <FaShoppingCart size={24} />
        </button>
        <button
          className="text-blue-500 hover:text-blue-800 focus:outline-none"
          aria-label="Messages"
        >
          <FaEnvelope size={24} />
        </button>
        <button
          className="text-blue-500 hover:text-blue-800 focus:outline-none"
          aria-label="Notifications"
        >
          <FaBell size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;