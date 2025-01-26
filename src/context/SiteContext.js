import React, { createContext, useContext } from 'react';
import { Projects, Products } from '../utils';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => (
    <SiteContext.Provider value={{ 
        projects: Projects, 
        products: Products 
    }}>
        {children}
    </SiteContext.Provider>
);

export const useSiteValue = () => useContext(SiteContext);

