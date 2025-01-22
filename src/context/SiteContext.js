import React, { createContext, useContext, useReducer } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ reducer, initialState, children }) => (
    <SiteContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SiteContext.Provider>
);

export const useSiteValue = () => useContext(SiteContext);

