// BaseUrlContext.js
import React from 'react';

const BaseUrlContext = React.createContext();

export const BaseUrlProvider = ({ children }) => {
    const baseUrl = 'https://h4u2d4fnti.execute-api.us-east-1.amazonaws.com/dev'; // Your base URL
    
    return (
        <BaseUrlContext.Provider value={baseUrl}>
            {children}
        </BaseUrlContext.Provider>
    );
};

export const useBaseUrl = () => React.useContext(BaseUrlContext);
