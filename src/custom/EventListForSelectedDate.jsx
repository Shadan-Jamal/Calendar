import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState } from "react";
  

const EventListForSelectedDate = ({eventList, idForSelectedDate}) => {
  const [events, setEvents] = useState([{}]);

  const filterEvents = () => {
    let currEvents = [...eventList];
    currEvents = currEvents.filter((item) => item.id === idForSelectedDate)
    setEvents(currEvents);
  };
  
  return (
    <Sheet>
        <SheetTrigger><
          Button onClick={filterEvents} variant="secondary">Check Events</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="max-h-[40dvh]">
            <SheetHeader>
            <SheetTitle className="w-full text-start font-bold text-3xl">
              Events for {events[0].id}
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