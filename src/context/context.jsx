import { useState, createContext, useContext, useEffect } from 'react';
import data from '../context/data.json';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [spaceData, setSpaceData] = useState(data);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentDestinationItem, setCurrentDestinationItem] = useState(0);
  const [currentTechItem, setCurrentTechItem] = useState(0);
  const [activeItem, setActiveItem] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsExpanded(false);
  };

  const handleClick = () => {
    if (isExpanded === false) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };
  return (
    <AppContext.Provider
      value={{
        spaceData,
        setCurrentItem,
        currentItem,
        currentDestinationItem,
        setCurrentDestinationItem,
        currentTechItem,
        setCurrentTechItem,
        handleItemClick,
        activeItem,
        handleClick,
        isExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
