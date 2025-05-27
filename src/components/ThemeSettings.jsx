import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { BsCheck } from "react-icons/bs";
import { useAppContext } from "../contexts/ContextProvider";

const ThemeSettings = ({ onClose }) => {
  const {theme, setMode, currentColor, setSelectedColor} = useAppContext()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const finalTheme = storedTheme || systemTheme;
    setMode(finalTheme);
    console.log("Previous theme: ", finalTheme);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="float-right w-72 h-full bg-white dark:bg-gray-800 shadow-lg p-4 ">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold dark:text-white">Settings</h2>
          <TooltipComponent content="close">
            <button
              className="text-2xl text-black font-bold hover:text-red-500 dark:hover:text-red-500 dark:text-white me-0"
              onClick={onClose}
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Theme Option
          </h3>
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Light"
                checked={theme === "light"}
                onChange={() => setMode('light')}
                className="accent-blue-500"
              />
              <span className="text-sm dark:text-white">Light</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Dark"
                checked={theme === "dark"}
                onChange={() => setMode('dark')}
                className="accent-blue-500"
              />
              <span className="text-sm dark:text-white">Dark</span>
            </label>
          </div>

          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Theme Colors
          </h3>
          <div className="flex gap-3 flex-wrap">
            {themeColors.map((item, index) => (
              <div
                key={index}
                className='w-8 h-8 rounded-full cursor-pointer flex justify-center items-center border-black dark:border-white' 
                style={{ backgroundColor: item.color, borderStyle: (currentColor === item.name)? 'solid':'', borderWidth: (currentColor === item.name)? '2px': '' }}
                onClick={() => setSelectedColor(item.name)}
              >
                {(currentColor === item.name) && <BsCheck className="text-xl text-white"/>}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
