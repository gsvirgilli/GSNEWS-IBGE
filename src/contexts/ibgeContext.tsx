import { createContext, useContext } from 'react';
import { ibgeContext } from '../types';

export const AppContext = createContext<ibgeContext | undefined>(undefined);

export const useIBGE = (): ibgeContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useContext must be used within a ibgeProvider');
  }
  return context;
};

export default AppContext;