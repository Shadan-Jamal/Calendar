import { Button } from '@/components/ui/button'
import React from 'react'
import { 
  FaAngleLeft, 
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight } from "react-icons/fa";

const CalendarHeader = ({month,year,changeMonth}) => {

  return (
    <div className='w-full max-h-[20%] flex flex-row justify-around items-center pb-6 px-8 mb-3 border-b-[1px] border-b-white'>
        <div className='grow'>
            <h1 className='text-3xl font-bold text-center text-white font-serif'>
              {`${month}, ${year}`}
            </h1>
        </div>
        <div className='space-x-3'>
            <Button variant="secondary" onClick={() => changeMonth("prevYear")}> <FaAngleDoubleLeft size={"1rem"}/> </Button>
            <Button variant="secondary" onClick={() => changeMonth("prev")}> <FaAngleLeft size={"1rem"}/> </Button>
            <Button variant="secondary" onClick={() => changeMonth()}> Today </Button>
            <Button variant="secondary" onClick={() => changeMonth("next")}> <FaAngleRight size={"1rem"}/> </Button>
            <Button variant="secondary" onClick={() => changeMonth("nextYear")}> <FaAngleDoubleRight size={"1rem"}/> </Button>
        </div>
    </div>
  )
}

export default CalendarHeader