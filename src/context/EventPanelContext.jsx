import React, { createContext, useEffect, useState } from 'react';

export const EventPanelContext = createContext();

export const EventPanelProvider = ({ children }) => {
    const [eventPanel, openEventPanel] = useState(() => {
        const storedEventPanel = localStorage.getItem('eventPanel');
        return storedEventPanel ? JSON.parse(storedEventPanel) : false;
    });

    useEffect(() => {
        localStorage.setItem('eventPanel', JSON.stringify(eventPanel));
    },[eventPanel])
    
    return (
        <EventPanelContext.Provider value={{ eventPanel, openEventPanel }}>
            {children}
        </EventPanelContext.Provider>
    );
};
