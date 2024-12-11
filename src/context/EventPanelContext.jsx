import React, { createContext, useState } from 'react';

export const EventPanelContext = createContext();

export const EventPanelProvider = ({ children }) => {
    const [eventPanel, openEventPanel] = useState(false);
    return (
        <EventPanelContext.Provider value={{ eventPanel, openEventPanel }}>
            {children}
        </EventPanelContext.Provider>
    );
};
