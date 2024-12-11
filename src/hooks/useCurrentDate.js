import { useState,useEffect } from "react";
import {  
    format, 
    startOfMonth,
    addMonths, 
    subMonths, 
    getDaysInMonth} from "date-fns";

export default function useCurrentDate(selectedMonthDirection){
    const [currentDate , setCurrentDate] = useState(new Date());
    const currentDay = format(currentDate,'dd');
    const currentMonth= format(currentDate,'MMMM');
    const currentYear = format(currentDate,'yyyy');
    const startingDayOfMonth= startOfMonth(currentDate);
    const numberOfDays = getDaysInMonth(currentDate);

    useEffect(() => {
        if(selectedMonthDirection.direction === "prev"){
            setCurrentDate((prevDate) => subMonths(prevDate,1));
        }
        else if(selectedMonthDirection.direction === "next"){
            setCurrentDate((prevDate) => addMonths(prevDate,1));
        }
        else{
            setCurrentDate(new Date());
        }
    },[selectedMonthDirection])
    
    return {currentDay, currentMonth, currentYear, startingDayOfMonth, numberOfDays};
}