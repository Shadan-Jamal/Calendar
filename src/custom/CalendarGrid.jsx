import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import PopupForEventEntry from "./PopupForEventEntry";
import EventListForSelectedDate from "./EventListForSelectedDate";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import clsx from "clsx"; //package for adding classes based on conditions
import { getDate } from "date-fns";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({
    currentDate,
    selectedMonthGaps,
    numberOfDays,
    checkCurrentDate,
}) => {
    const daysInMonth = Array.from({ length: numberOfDays }).map(
        (_, index) => index + 1
    );
    const gaps = Array.from({ length: selectedMonthGaps }).fill(null); // prefix gaps before the starting date of the month
    const [selectedDate, setSelectedDate] = useState({
        id: "",
        selectedDay: "",
        selectedMonth: "",
        selectedYear: "",
    });

    // Initializing eventList with localStorage data,
    const [eventList, setEventList] = useState(() => {
        const storedEvents = localStorage.getItem("eventList");
        return storedEvents ? JSON.parse(storedEvents) : [];
    });

    // Saving eventList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("eventList", JSON.stringify(eventList));
    }, [eventList]);

    const handleClick = (dayIter) => {
        setSelectedDate({
            ...selectedDate,
            id: `${dayIter} ${currentDate.month}, ${currentDate.year}`,
            selectedDay: dayIter,
            selectedMonth: currentDate.month,
            selectedYear: currentDate.year,
        });
    };

    const hasEvent = (day) => {
        const id = `${day} ${currentDate.month}, ${currentDate.year}`;
        return eventList.some((event) => event.id === id);
    };

    return (
        <div className="grid grid-cols-7 auto-rows-max gap-y-7 place-content-center place-items-center">
            {WEEKDAYS.map((weekDay) => {
                return (
                    <div key={weekDay} className="px-3 py-1">
                        <h1
                            className={`font-bold text-xl ${
                                weekDay === "Sun" ? "text-red-600" : "text-white"
                            }`}
                        >
                            {weekDay}
                        </h1>
                    </div>
                );
            })}

            {gaps.map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        className="w-14 min-h-14 hover:cursor-default"
                    />
                );
            })}

            {daysInMonth.map((dayIter, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={() => handleClick(dayIter)}
                        className="w-14 min-h-14 flex justify-center items-center hover:cursor-pointer"
                    >
                        <Popover>
                            <div
                                className={`${clsx(
                                    parseInt(getDate(new Date())) === dayIter &&
                                        checkCurrentDate === 0 &&
                                        "bg-gray-600 text-white"
                                )} rounded-full hover:bg-gray-500 transition-[background-color] px-2 py-1 text-2xl text-white`}
                            >
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <PopoverTrigger>{dayIter}</PopoverTrigger>
                                    {hasEvent(dayIter) && (
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    )}
                                </div>

                                <PopoverContent className="max-w-52 flex flex-col gap-1 justify-center items-center border-none bg-zinc-600/30 backdrop-blur-sm text-white">
                                    <PopupForEventEntry
                                        selectedDate={selectedDate}
                                        eventList={eventList}
                                        setEventList={setEventList}
                                    >
                                        <Button>Add Event</Button>
                                    </PopupForEventEntry>

                                    <EventListForSelectedDate
                                        idForSelectedDate={selectedDate.id}
                                        eventList={eventList}
                                        setEventList={setEventList}
                                    />
                                </PopoverContent>
                            </div>
                        </Popover>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CalendarGrid;
