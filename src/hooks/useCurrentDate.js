import { useState,useEffect } from "react";
import { endOfMonth, format, startOfMonth,addMonths, subMonths } from "date-fns";

export default function useCurrentDate(selectedMonthDirection){
    const [currentDate , setCurrentDate] = useState(new Date());

    const currentDay = format(currentDate,'dd');
    const currentMonth= format(currentDate,'MMMM');
    const currentYear = format(currentDate,'yyyy');
    const startingDayOfMonth= startOfMonth(currentDate);
    const endingDayOfMonth = endOfMonth(currentDate);
    
    useEffect(() => {
        if(selectedMonthDirection.direction === "prev"){
            setCurrentDate((prevDate) => subMonths(prevDate,1));
        }
        else if(selectedMonthDirection.direction === "next"){
            setCurrentDate((prevDate) => addMonths(prevDate,1));
        }
    },[selectedMonthDirection])
    
    return {currentDay,currentMonth,currentYear,startingDayOfMonth,endingDayOfMonth};
}