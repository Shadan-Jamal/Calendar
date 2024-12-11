import {motion, AnimatePresence} from "motion/react"
import { useContext } from "react";
import { EventPanelContext } from "@/context/EventPanelContext";
import AddEvent from "./AddEvent";
import Event from "./Event";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const EventSidePanel = () => {
    const [events,setEvent] = useState([{
        eventHeader : "", 
        eventContent : "",
        eventTiming : "",
    }]);
    const {openEventPanel,eventPanel} = useContext(EventPanelContext);

    return ( eventPanel && <AnimatePresence>
    <motion.div
    initial={{width: 0}}
    animate={{minWidth : "30dvw", transition : {ease : "easeIn", duration : 0.2}}}
    exit={{width : 0}}
    className="h-screen absolute top-0 right-0 bg-zinc-500 rounded-tl-xl"
    >
        <div className="relative h-full">
            <motion.div className="static top-0 w-full px-5 py-2 border-b-[1px] flex justify-between items-center mb-3">
                <h1 className="text-3xl font-bold text-white font-serif justify-start">Events</h1>
                <motion.div className=" h-full rounded-full hover:bg-slate-200 flex justify-center">
                    <AddEvent addEvents={setEvent}/>
                </motion.div>
                <div onClick={() => openEventPanel(false)} className="text-3xl justify-self-end hover:cursor-pointer">
                    <IoMdCloseCircle className="hover:text-cyan-50"/>
                </div>
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
    </AnimatePresence>
  )
}

export default EventSidePanel