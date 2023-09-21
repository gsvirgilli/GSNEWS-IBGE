import { useState, useEffect } from 'react';
import { ibgeType } from '../types';
import { getApi } from '../services/api';
import { AppContext } from './ibgeContext';

type ibgeProviderProps = {
  children: React.ReactNode;
}

export function AppProvider({ children }: ibgeProviderProps ) {
  const [apiData, setApiData, ] = useState<ibgeType[]>([]);
  const [favorites, setFavorites] = useState<ibgeType[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const fetchPlanets = await getApi();
      setApiData(fetchPlanets);
    };

    fetchApi();
  }, []);

  const toggleFavorite = (item: ibgeType) => {
    const isFavorite = favorites.some((favorite) => favorite.id === item.id);

    if (isFavorite) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== item.id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  }

  const contextValue = {
    apiData,
    favorites,
    toggleFavorite,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
