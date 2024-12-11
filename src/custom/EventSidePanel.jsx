import {motion} from "motion/react"
import AddEvent from "./AddEvent";
import Event from "./Event";
import { useState } from "react";

const EventSidePanel = () => {
    const [events,setEvent] = useState([{
        eventHeader : "", 
        eventContent : "",
        eventTiming : "",
    }]);

    console.log(events)
  
    return (
    <motion.div
    // initial={{x: "-100vw"}}
    className="h-screen min-w-[30vw] absolute top-0 right-0 bg-zinc-500 rounded-tl-xl"
    >
        <div className="relative h-full">
            <motion.div className="static top-0 w-full px-5 py-2 border-b-[1px] flex justify-around items-center mb-3">
                <h1 className="text-3xl font-bold text-white font-serif justify-start">Events</h1>
                <motion.div className=" h-full rounded-full hover:bg-slate-200 flex justify-center">
                    <AddEvent addEvents={setEvent}/>
                </motion.div>
            </motion.div>

            <div className="px-2 flex flex-col gap-3">
                {events.length>1 && events.map((item,index) => {
                    if(index === 0){
                        return;
                    };

                    return <Event 
                    key={index} 
                    details={item}
                    deleteEvent={setEvent}
                    />
                })}
            </div>

        </div>
    </motion.div>
  )
}

export default EventSidePanel