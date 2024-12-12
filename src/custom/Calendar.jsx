import { useEffect, useState } from "react";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import useCurrentDate from "@/hooks/useCurrentDate";
import { getDay, getMonth, getYear } from "date-fns";

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

//Parent Caledar component that will have the header and the grid.
const Calendar = () => {
    //state for storing today's date
    const [currentDate,setCurrentDate] = useState({  
        day : getDay(new Date()), 
        month : getMonth(new Date()), 
        year: getYear(new Date())
    });

    //state for changin month
    const [selectedMonthDirection,setSelectedMonthDirection] = useState({counter : 0 , direction : ""})

    //custom hook for getting current month details
    const {
        currentDay,
        currentMonth,
        currentYear,
        startingDayOfMonth,
        numberOfDays } = useCurrentDate(selectedMonthDirection);
        
    //prefixed number of gaps at the starting of the month
    const [selectedMonthGaps,setSelectedMonthGaps] = useState(
        getDay(new Date())
    );

    //function to change the month
    const changeMonth = (dir) => {

        if(dir === "prev" || dir === "prevYear"){
            setSelectedMonthDirection((prev) => {
                return {...prev, counter : prev.counter - 1, direction : dir}
            });
        }
      
        else if(dir === "next" || dir === "nextYear"){
            setSelectedMonthDirection((prev) => {
                return {...prev, counter : prev.counter + 1, direction : dir}
            });
        }

        else{
            setSelectedMonthDirection((prev) => {
                return {...prev, counter : 0, direction : ""}
            })
        }
    }

    useEffect(() => {
        setCurrentDate({
            day : currentDay,
            month : currentMonth,
            year : currentYear
        })
        setSelectedMonthGaps(getDay(new Date(startingDayOfMonth)));
    },[currentDay,currentMonth,currentYear]);
    
    return (<>
        <div className='bg-zinc-900 max-w-[95dvw] lg:max-w-[80dvw] max-h-fit py-7 mx-auto rounded-3xl'>
            <CalendarHeader 
            month={currentMonth}
            year={currentYear}
            changeMonth={changeMonth}
            />

            <CalendarBody 
            currentDate={currentDate}
            numberOfDays={numberOfDays}
            selectedMonthGaps={selectedMonthGaps}
            checkCurrentDate={selectedMonthDirection.counter} //prop to check if the current date of the current month is selected
            />

        </div>
    </>
    )
}

export default Calendar