import { useCallback, useEffect, useState } from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import useCurrentDate from "@/hooks/useCurrentDate";

const Calendar = () => {
    const {
        currentDay,
        currentMonth,
        currentYear,
        startingDayOfMonth,
        endingDayOfMonth,
        monthIndex
    } = useCurrentDate();
    
    const [selectedDate,setSelectedDate] = useState({ day : currentDay, month : currentMonth, year: currentYear})
    const [selectedMonthIndex,setSelectedMonthIndex] = useState(monthIndex);
    const [selectedMonthGaps,setSelectedMonthGaps] = useState(0);

    const changeMonth = (btnStr) => {
        if(btnStr === "prev"){
            setSelectedMonthIndex((prevIndex) => prevIndex === 0 ? 12 : prevIndex - 1);
        }
        else if(btnStr === "next"){
            setSelectedMonthIndex((prevIndex) => prevIndex === 11 ? 1 : prevIndex + 1);
        }
    }
    
    useEffect(() => {
        
    },[changeMonth])

    return (
        <div className='bg-zinc-900 max-w-[80dvw] max-h-fit py-7 mx-auto rounded-3xl'>
            <CalendarHeader 
            month={selectedDate.month}
            year={selectedDate.year}
            changeMonth={changeMonth}
            />

            <CalendarBody 
            day={selectedDate.day}
            startingDayOfMonth={startingDayOfMonth} 
            endingDayOfMonth={endingDayOfMonth} />
        </div>
    )
}

export default Calendar