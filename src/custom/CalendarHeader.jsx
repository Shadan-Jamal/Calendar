import { Button } from '@/components/ui/button'
import React from 'react'


const CalendarHeader = ({ month, year, changeMonth}) => {
  
  return (
    <div className='w-full max-h-[20%] flex flex-row justify-around items-center pb-6 px-8 mb-3 border-b-[1px] border-b-white'>
        <div className='grow'>
            <h1 className='text-3xl font-bold text-center text-white font-serif'>{`${month}, ${year}`}</h1>
        </div>
        <div className='space-x-7'>
            <Button onClick={() => changeMonth("prev")}> Previous </Button>
            <Button onClick={() => changeMonth("next")}> Next </Button>
        </div>
    </div>
  )
}

export default CalendarHeader