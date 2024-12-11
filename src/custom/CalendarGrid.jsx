import {motion} from "motion/react"
import { useState } from "react";
import clsx from "clsx";
import { getDate } from "date-fns";

const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const CalendarGrid = ({day, selectedMonthGaps, numberOfDays, checkCurrentDate}) => {
    
    const daysInMonth = Array.from({length : numberOfDays}).map((_,index) => index + 1);
    const gaps = Array.from({length : selectedMonthGaps}).fill(null);
    const [selectedDate, setSelectedDate]= useState(getDate(new Date()));
    const [tickDate, setTickDate] = useState(false);

    const handleClick = (dayIter) => {
        setSelectedDate((prev) => dayIter);
        setTickDate(!tickDate);
    }

    console.log(selectedDate)

    return (
        <div className='grid grid-cols-7 auto-rows-max gap-y-7 place-content-center place-items-center'>
            {WEEKDAYS.map((weekDay) => {
                return (
                    <div key={weekDay} className='px-3 py-1'>
                        <h1 className={`font-bold text-xl ${weekDay === "Sun" ? "text-red-600" : "text-white"}`}>{weekDay}</h1>
                    </div>
                )
            })}
            {gaps.map((_,index) => {
                return <motion.div key={index} className="w-14 min-h-14 hover:cursor-default" />
            })}
            {daysInMonth.map((dayIter,index) => {
                return <motion.div key={index} 
                initial={{scale : 0}}
                animate={{scale : 1}}
                className="w-14 min-h-14 flex justify-center items-center hover:cursor-default"
                >
                    <div
                    onClick={() => handleClick(dayIter)} 
                    className={`${clsx((parseInt(day) === dayIter && checkCurrentDate === 0) && "bg-gray-600 text-white")}
                    ${clsx((selectedDate === dayIter && tickDate) && "bg-gray-800 text-white")}
                    rounded-full hover:bg-gray-500 transition-[background-color] px-4 py-1 text-2xl text-white`}>
                        {dayIter}
                    </div>
                </motion.div>
            })}
            
        </div>
    )
}

export default CalendarGrid