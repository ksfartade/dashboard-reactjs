import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {links} from "../data/dummy";



const SideBar = ({ screenWidth, setIsOpen }) => {

  const sidebarHandle = () => {
    if(screenWidth < 760){
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-white shadow-lg z-50 py-8 ps-10 flex flex-col justify-start h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-6 me-2">
        <NavLink to='/' onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-3xl text-black">
            <SiShopware /> <span className='text-xl text-black font-bold'> Shoppy </span>
        </NavLink>
        <TooltipComponent content="close">
          <button
            className="text-2xl text-balck font-bold hover:text-red-500 me-0"
            onClick={() => setIsOpen(false)}
            >
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>

      {/* Add sidebar content below */}
      <div className='overflow-y-auto custom-scrollbar'>
      {
        links.map((block, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              {block.title}
            </h3> 
            
            {
              block.links.map((item, idx) => (
                <NavLink 
                  key={idx}
                  onClick={sidebarHandle}
                  to={item.name}
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-2 me-2 mb-5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-pink-600 text-white'
                        : 'hover:bg-gray-100'
                    }`
                  }
                >
                  <span className="text-xl ">{item.icon}</span>
                  <span className="text-md font-medium capitalize">{item.name}</span>
                </NavLink>
              ))
            }
          </div>
        ))
      }
      </div>

    </div>
  );
};

export default SideBar;
