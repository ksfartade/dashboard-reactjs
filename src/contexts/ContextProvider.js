import { createContext, useContext, useState } from 'react';

// Create the App Context
const AppContext = createContext();

const initialState = {
  cart : false,
  chat: false,
  notification: false, 
  profile: false
}

// App Provider Component
export const ContextProvider = ({ children }) => {
  // Example state: sidebar status, theme, and user data
  const [state, setState] = useState({
    isSidebarOpen: true,
    theme: 'light', // 'light' or 'dark'
    user: null, // e.g., { name: 'John', id: 1 }
  });

  const [navButtonClick, setNavButtonClick] = useState(initialState);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState('light');
  const [currentColor, setCurrentColor] = useState("blue");
  

  const setMode = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
    console.log("changing theme: ", theme);
  }

  const setSelectedColor = (color) => {
    setCurrentColor(color);
    setShowSettings(false);
    localStorage.setItem('currentColor', color);
  }

  // Generic function to update state
  const updateState = (newState) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  // Specific action functions for convenience
  const toggleSidebar = () => {
    updateState({ isSidebarOpen: !state.isSidebarOpen });
  };

  // handling navbutton clicked.
  const navButtonClicked = (name) => {
    setNavButtonClick({...initialState, [name]: true});
  }

  const toggleTheme = () => {
    updateState({ theme: state.theme === 'light' ? 'dark' : 'light' });
  };


  return (
    <AppContext.Provider
      value={{
        state,
        updateState,
        toggleSidebar,
        toggleTheme,
        navButtonClicked,
        navButtonClick,
        showSettings,
        setShowSettings,
        theme,
        currentColor,
        setMode,
        setSelectedColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the App Context
export const useAppContext = () => {
  return useContext(AppContext);
};