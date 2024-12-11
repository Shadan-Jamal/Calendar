import {motion} from "motion/react"
import { useEffect, useState } from "react";
import clsx from "clsx";

const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const CalendarGrid = ({day, startingDayOfMonth, endingDayOfMonth}) => {
    const [days,setDays] = useState(Array(31).fill(null).map((_,index) => index+1));
    console.log(day,startingDayOfMonth,endingDayOfMonth)
    return (
        <div className='grid grid-cols-7 auto-rows-max gap-y-7 place-content-center place-items-center'>
            {WEEKDAYS.map((weekDay) => {
                return (
                    <div key={weekDay} className='px-3 py-1'>
                        <h1 className={`font-bold text-xl ${weekDay === "Sun" ? "text-red-600" : "text-white"}`}>{weekDay}</h1>
                    </div>
                )
            })}
            {days.map((dayIter,index) => {
                return <motion.div key={index} 
                initial={{scale : 0}}
                animate={{scale : 1}}
                className="w-14 min-h-14 flex justify-center items-center hover:cursor-default"
                >
                    <div className={`${clsx(parseInt(day) === dayIter && "bg-gray-600 text-white")} rounded-full hover:bg-gray-500 transition-[background-color] px-4 py-1 text-2xl text-white`}>
                        {dayIter}
                    </div>
                </motion.div>
            })}
            
        </div>
    )
}

export default CalendarGrid