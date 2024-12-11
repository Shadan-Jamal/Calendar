import React from 'react'
import CalendarGrid from './CalendarGrid'

const CalendarBody = ({day, selectedMonthGaps, numberOfDays, checkCurrentDate}) => {
  return (
    <div className='w-full max-h-[75%]'>
      <CalendarGrid 
      day={day} 
      numberOfDays={numberOfDays} 
      selectedMonthGaps={selectedMonthGaps}
      checkCurrentDate={checkCurrentDate}
      // setSelectedDate={setSelectedDate}
      // selectedDate={selectedDate}
      />
    </div>
  )
}

export default CalendarBody