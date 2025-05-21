import { FaBars, FaSearch, FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';
import { useAppContext } from "../contexts/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from "../data/avatar.jpg";
import {Cart, Chat, Notification, UserProfile} from ".";
import { useEffect } from 'react';


function Navbar() {
  const { state, toggleSidebar, navButtonClick, navButtonClicked } = useAppContext();
  const { isSidebarOpen } = state;

  // ⬅️ Universal tooltip button generator
  const navBarIcon = ({ content, callBack, Icon, buttonClass = null }) => {
    return (
      <TooltipComponent content={content}>
        <button onClick={callBack} className={buttonClass} style={{color: "blue"}}>
          {Icon ? <Icon size={24} /> : null}
        </button>
      </TooltipComponent>
    );
  };

  return (
    <nav className=" dark:bg-main-dark-bg p-4 ps-10 flex justify-between items-center shadow-md">
      {/* Left Side: List and Search Icons */}
      <div className="flex items-center gap-[3vw]">
        {!isSidebarOpen &&
          navBarIcon({
            content: "Open Sidebar",
            callBack: toggleSidebar,
            Icon: AiOutlineMenu,
          })}

          {navBarIcon({
            content: "search",
            callBack: null,
            Icon: FaSearch,
          })}
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center gap-[3vw]">
        {navBarIcon({
          content: "Cart",
          callBack: () => navButtonClicked("cart"),
          Icon: FiShoppingCart,
        })}
        {navBarIcon({
          content: "Messages",
          callBack: () => navButtonClicked("chat"),
          Icon: BsChatLeft,
        })}
        {navBarIcon({
          content: "Notifications",
          callBack: () => navButtonClicked("notification"),
          Icon: RiNotification3Line,
        })}
        <TooltipComponent content="Profile">
          <button
            onClick={() => navButtonClicked("profile")}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={avatar}
              alt="profile"
              className="rounded-full w-8 h-8 object-cover"
            />
            <span className="text-sm">Hi,</span>
            <span className="font-bold text-sm">Manish</span>
          </button>
        </TooltipComponent>
      </div>

      {navButtonClick.cart && <Cart/>}
      {navButtonClick.chat && <Chat/>}
      {navButtonClick.notification && <Notification/>}
      {navButtonClick.profile && <UserProfile/>}
    </nav>
  );
}

export default Navbar;