import React from 'react'
import Note from './Note'
import { useContext } from 'react'
import { EventPanelContext } from '@/context/EventPanelContext'
import { Button } from '@/components/ui/button'
const Header = () => {
  const {openEventPanel} = useContext(EventPanelContext);
  return (
    <div className='w-screen py-2 px-9 flex flex-row justify-around items-center'>
        <div className='p-3'>
            <h1 className='text-white font-serif font-bold text-4xl'>Calendar</h1>
        </div>
        <Note />
        <div className='text-white px-4 rounded-md py-1'>
          <Button variant="secondary" onClick={() => openEventPanel(true)}>Add Event</Button>
        </div>
    </div>
  )
}

export default Header