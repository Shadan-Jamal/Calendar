import React from 'react'
import CalendarGrid from './CalendarGrid'

const CalendarBody = ({
  currentDate,
  selectedMonthGaps, 
  numberOfDays, 
  checkCurrentDate}) => {
  return (
    <div className='w-full max-h-[75%]'>
      <CalendarGrid 
      currentDate={currentDate}
      numberOfDays={numberOfDays} 
      selectedMonthGaps={selectedMonthGaps}
      checkCurrentDate={checkCurrentDate}
      />
    </div>
  )
}

export default CalendarBody