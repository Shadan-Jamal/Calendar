import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";

const PopupForEventEntry = ({
    children, 
    selectedDate,
    eventList,
    setEventList,
    checkEventPresence,
    setCheckEventPresence
    }) => {
    const [inputValues, setInputValues] = useState({
        title : "",
        description : "",
        timings : ""
    })
    const {selectedDay, selectedMonth, selectedYear} = selectedDate;

    //adding events for the selected date
    const handleClick = () => {
        setEventList([...eventList, 
            {
                id : `${selectedDay} ${selectedMonth}, ${selectedYear}`, 
                inputValues,
        }])
        
        setCheckEventPresence([...checkEventPresence, {
            id : `${selectedDay} ${selectedMonth}, ${selectedYear}`,
            present : true
        }])
    }
    console.log(eventList)
    return (
        <Dialog>
        <DialogTrigger className="p-1">
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add an event for {`${selectedDay} ${selectedMonth}, ${selectedYear}`}</DialogTitle>
            </DialogHeader>

            <Input 
            value={inputValues.title} 
            onChange={(e) => setInputValues({...inputValues, title : e.target.value})} 
            placeholder="Title"/>

            <Input 
            value={inputValues.description} 
            onChange={(e) => setInputValues({...inputValues, description : e.target.value})} 
            placeholder="Description" 
            />

            <Input
            value={inputValues.timings} 
            onChange={(e) => setInputValues({...inputValues, timings : e.target.value})} 
            placeholder="Timings" 
            />
            <Button onClick={handleClick}>Add</Button>
        </DialogContent>
    </Dialog>
    )
  
}

export default PopupForEventEntry;