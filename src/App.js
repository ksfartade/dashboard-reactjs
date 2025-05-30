import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings, Pie } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Bar,
} from "./pages";
import { useAppContext } from "./contexts/ContextProvider";

function App() {
  const { state, toggleSidebar, showSettings, setShowSettings, currentColor} = useAppContext();
  const { isSidebarOpen } = state;

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(()=>{
    setScreenWidth(window.innerWidth);
    if(window.innerWidth < 960){
      toggleSidebar();
    }

  }, []);

  if(!screenWidth) return null;


  return (
    <div>
      <BrowserRouter>
        <div className="relative bg-gray-50 dark:bg-main-dark-bg">
          <div className="fixed right-5 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings">
              <button
                className="text-3xl p-3 hover:drop-shadow-2xl text-white rounded-full flex items-center justify-center"
                style={{ background: currentColor }}
                onClick={() => {
                  setShowSettings((prev) => !prev);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {isSidebarOpen && (
            <div className={`fixed top-0 left-0 h-full w-[350px] dark:bg-secondary-dark-bg bg-yellow-50`}>
              <Sidebar screenWidth={screenWidth} setIsOpen={toggleSidebar} />
            </div>
          )}

          {/* Main Content (Navbar + Routes) */}
          <div
            className={`w-[100%] min-h-screen transition-all duration-[500ms] ease-in-out flex flex-col`}
            style={{ 
              paddingLeft: isSidebarOpen? '350px': '0px',
              transitionProperty: "padding-left" 
            }}
          >
            <div className="dark:bg-main-dark-bg w-full sticky top-0 z-10 bg-white">
              <Navbar />
            </div>

             {showSettings && (
              <ThemeSettings onClose={() => setShowSettings(false)} />
            )}

            <div className='flex-1 flex flex-col h-full box-border m-[4vw] '>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
