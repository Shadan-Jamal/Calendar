import { Button } from '@/components/ui/button'
import React from 'react'
import { 
  FaAngleLeft, 
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight } from "react-icons/fa";

const CalendarHeader = ({month,year,changeMonth}) => {

  return (
    <div className='w-full max-h-[20%] flex flex-col gap-2 lg:flex-row justify-around items-center pb-6 px-1 lg:px-8 mb-3 border-b-[1px] border-b-white'>
        <div className='grow'>
            <h1 className='text-[7vw] lg:text-3xl font-bold text-center text-white font-serif'>
              {`${month}, ${year}`}
            </h1>
        </div>
        {/* buttons for changing year or month */}
        <div className='space-x-1 lg:space-x-3'>
            <Button className="max-w-[20vw] lg:max-w-[30vw] px-2 py-1 lg:p-5" variant="secondary" onClick={() => changeMonth("prevYear")}> <FaAngleDoubleLeft /> </Button>
            <Button className="max-w-[20vw] lg:max-w-[30vw] px-2 py-1 lg:p-5" variant="secondary" onClick={() => changeMonth("prev")}> <FaAngleLeft size={"1rem"}/> </Button>
            <Button className="max-w-[30vw] lg:max-w-[30vw] px-2 py-1 lg:p-5" variant="secondary" onClick={() => changeMonth()}> Today </Button>
            <Button className="max-w-[20vw] lg:max-w-[30vw] px-2 py-1 lg:p-5" variant="secondary" onClick={() => changeMonth("next")}> <FaAngleRight size={"1rem"}/> </Button>
            <Button className="max-w-[20vw] lg:max-w-[30vw] px-2 py-1 lg:p-5" variant="secondary" onClick={() => changeMonth("nextYear")}> <FaAngleDoubleRight size={"1rem"}/> </Button>
        </div>
    </div>
  )
}

export default CalendarHeader