import { useState } from "react";
import { format, getMonth, startOfMonth } from "date-fns";

export default function useCurrentDate(){
    const [currentDay, setCurrentDay] = useState(format(new Date(),'dd'));
    const [currentMonth, setCurrentMonth] = useState(format(new Date(),'MMMM'));
    const [currentYear, setCurrentYear] = useState(format(new Date(),'yyyy'));
    const [startingDayOfMonth,setStartingOfMonth] = useState(startOfMonth(new Date));
    const [endingDayOfMonth,setEndingOfMonth] = useState(startOfMonth(new Date()));
    const [monthIndex, setMonthIndex] = useState(getMonth(new Date()));

    return {currentDay,currentMonth,currentYear,startingDayOfMonth,endingDayOfMonth,monthIndex};
}