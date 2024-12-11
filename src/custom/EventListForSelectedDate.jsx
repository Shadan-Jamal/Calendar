import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRef } from "react";
import { CiBookmarkRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { useState } from "react";
  

const EventListForSelectedDate = ({eventList,setEventList, idForSelectedDate}) => {
  const [events, setEvents] = useState([{}]);
  const eventDate = useRef(idForSelectedDate);

  const filterEventsForSelectedDate = () => {
    let currEvents = [...eventList];
    currEvents = currEvents.filter((item) => item.id === idForSelectedDate)
    setEvents(currEvents);
  };
  
  const removeEvent = (eventId) => {
    console.log(eventList);
    console.log(events);
    // Filtering out the event with the specified ID from eventList
    setEventList((prev) => prev.filter((item) => item.id !== eventId));

    // Updating the local events list for the selected date
    setEvents((prev) => prev.filter((item) => item.id !== eventId));
  };

  return (
    <Sheet>
        <SheetTrigger>
          <Button onClick={filterEventsForSelectedDate} variant="secondary">Check Events</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="max-h-[40dvh]">
            <SheetHeader>
            <SheetTitle className="w-full text-start font-bold text-3xl">
              Events for {eventDate.current}
            </SheetTitle>
            <SheetDescription className="p-4">
                {events.map((e, index) => {
                    const details = Object.values(e);
                    return (
                        <div 
                          className="flex flex-col justify-start items-start gap-4 border border-gray-300 rounded-lg p-4 mb-4 shadow-md"
                          key={`${e.id} ${index}`}>

                          {details.map((item, index) => {
                              if(item.title === undefined || item.title.length === 0){
                                return;
                              }
                              
                              return (
                                  <div key={`${item.title} ${index}`}
                                  className="flex flex-row justify-between items-center gap-5 rounded-md p-2 bg-white"
                                  >
                                  <p className="font-bold text-black">{item.title}</p>
                                  <p className="text-gray-700">{item.description}</p>
                                  <p className="text-gray-500">{item.timings}</p>
                                  <CiBookmarkRemove onClick={() => removeEvent(e.id)} className="text-black hover:cursor-pointer" size={"2rem"} />
                                  </div>
                              )
                          })}
                        </div>
                    )
                })}
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default EventListForSelectedDate;