import { useState, useEffect } from 'react';
import { ibgeType } from '../types';
import { getApi } from '../services/api';
import { AppContext } from './ibgeContext';

type ibgeProviderProps = {
  children: React.ReactNode;
}

export function AppProvider({ children }: ibgeProviderProps ) {
  const [apiData, setApiData] = useState<ibgeType[]>([]);
  const [favorites, setFavorites] = useState<ibgeType[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchPlanets = await getApi();
      setApiData(fetchPlanets);
    };

    fetchApi();
  }, []);

  const addToFavorites = (item: ibgeType) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (itemId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item: ibgeType) => item.id !== itemId)
    );
  };


  const contextValue = {
    apiData,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
