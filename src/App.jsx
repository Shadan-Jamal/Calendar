import React, { useState } from 'react'
import Header from './custom/Header'
import Calendar from './custom/Calendar'
import EventSidePanel from './custom/EventSidePanel';
import { EventPanelProvider } from '@/context/EventPanelContext';

const App = () => {
  return (
    <EventPanelProvider>
      <div className='w-[100dvw] h-[100dvh] bg-zinc-700 overflow-x-hidden'>
        <Header />
        <Calendar />
        <EventSidePanel />
      </div>
    </EventPanelProvider>
  )
}

export default App