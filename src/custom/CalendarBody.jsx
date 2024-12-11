import React from 'react'
import CalendarGrid from './CalendarGrid'

const CalendarBody = ({day, startingDayOfMonth, endingDayOfMonth, monthIndex}) => {
  return (
    <div className='w-full max-h-[75%]'>
      <CalendarGrid 
      day={day} 
      startingDayOfMonth={startingDayOfMonth} 
      endingDayOfMonth={endingDayOfMonth} />
    </div>
  )
}

export default CalendarBody