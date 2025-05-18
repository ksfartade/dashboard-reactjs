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
  const { state, toggleSidebar } = useAppContext();
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
        <div className="flex relative bg-white">
          <div className="fixed right-5 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings">
              <button
                className="text-3xl p-3 hover:drop-shadow-2xl text-white rounded-full flex items-center justify-center"
                style={{ background: "blue" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {isSidebarOpen && (
            <div
              className={`sticky sidebar dark:bg-secondary-dark-bg bg-yellow-50 h-screen`}
            >
              <Sidebar screenWidth={screenWidth} setIsOpen={toggleSidebar} />
            </div>
          )}

          {/* Main Content (Navbar + Routes) */}
          <div
            className={`flex-1 transition-all duration-[500ms] ease-in-out`}
            style={{ transitionProperty: "margin-left" }}
          >
            <div className="dark:bg-main-dark-bg navbar w-full sticky top-0 z-10">
              <Navbar />
            </div>

            <div>
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
                <Route path="/calender" element={<Calendar />} />
                <Route path="/color-picket" element={<ColorPicker />} />

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
