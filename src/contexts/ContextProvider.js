import { createContext, useContext, useState } from 'react';

// Create the App Context
const AppContext = createContext();

// App Provider Component
export const ContextProvider = ({ children }) => {
  // Example state: sidebar status, theme, and user data
  const [state, setState] = useState({
    isSidebarOpen: true,
    theme: 'light', // 'light' or 'dark'
    user: null, // e.g., { name: 'John', id: 1 }
  });

  // Generic function to update state
  const updateState = (newState) => {
    setState((prev) => ({ ...prev, ...newState }));
  };

  // Specific action functions for convenience
  const toggleSidebar = () => {
    updateState({ isSidebarOpen: !state.isSidebarOpen });
  };

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