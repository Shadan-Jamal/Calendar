import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { useState } from "react";
  import { IoMdAdd } from "react-icons/io";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";

//This component is a popup dialog for adding an event in the side panel
const AddEvent = ({addEvents}) => { 
    const [inputValues, setInputValues] = useState({
        title : "",
        description : "",
        timings : ""
    })

    const handleClick = () => {
        addEvents((prevValue) => [...prevValue , inputValues]);
    }

  return (
    <Dialog>
        <DialogTrigger className="p-1">
            <IoMdAdd size={"2rem"}/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add an event</DialogTitle>
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

export default AddEvent