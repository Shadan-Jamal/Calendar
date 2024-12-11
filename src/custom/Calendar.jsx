import { useEffect, useState } from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import useCurrentDate from "@/hooks/useCurrentDate";
import { getDay, getMonth, getYear } from "date-fns";

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const Calendar = () => {
    const [selectedDate,setSelectedDate] = useState({ 
        day : getDay(new Date()), 
        month : getMonth(new Date()), 
        year: getYear(new Date())})

    const [selectedMonthDirection,setSelectedMonthDirection] = useState({counter : 0 , direction : ""})
    const [selectedMonthGaps,setSelectedMonthGaps] = useState(0);

    const {
        currentDay,
        currentMonth,
        currentYear,
        startingDayOfMonth,
        endingDayOfMonth } = useCurrentDate(selectedMonthDirection);

    
    const changeMonth = (dir) => {
        if(dir === "prev"){
            setSelectedMonthDirection((prev) => {
                return {...prev, counter : prev.counter - 1, direction : dir}
            });
        }
        else if(dir === "next"){
            setSelectedMonthDirection((prev) => {
                return {...prev, counter : prev.counter + 1, direction : dir}
            });
        }
    }

    useEffect(() => {
        setSelectedDate({
            day : currentDay,
            month : currentMonth,
            year : currentYear
        })
        
    },[currentDay,currentMonth,currentYear]);

    return (
        <div className='bg-zinc-900 max-w-[80dvw] max-h-fit py-7 mx-auto rounded-3xl'>
            <CalendarHeader 
            month={currentMonth}
            year={currentYear}
            changeMonth={changeMonth}
            />

            <CalendarBody 
            day={currentDay}
            startingDayOfMonth={startingDayOfMonth} 
            endingDayOfMonth={endingDayOfMonth} 
            />
        </div>
    )
}

export default Calendar