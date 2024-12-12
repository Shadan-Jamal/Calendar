import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import {motion} from "motion/react"
import { RxCross1 } from "react-icons/rx";

const Event = ({details, key, deleteEvent}) => {
    const {title, description, timings,date} = details;

    const deleteItem= (title) => {
        deleteEvent((prev) => prev.filter((item) => item.title != title))
    }
  return (
    <motion.div key={key} className="h-auto border rounded-md px-4 py-2 hover:bg-zinc-600">
    <Collapsible>
        <CollapsibleTrigger 
        className="text-white font-bold text-xl font-serif w-full text-start flex justify-between items-center">
            <div>
                {title}
            </div>
            <div onClick={() => deleteItem(title)} className="hover:bg-slate-600 rounded-full p-1">
                <RxCross1 size={"1rem"}/>
            </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
            <div className="text-white font-bold text-sm font-serif block w-full text-start">
                {description}
            </div>
            <div className="text-white font-bold text-sm font-serif block w-full text-start">
                {timings}
            </div>
            <div className="text-white font-bold text-sm font-serif block w-full text-start">
                {date}
            </div>
        </CollapsibleContent>
    </Collapsible>
    </motion.div>
  )
}

export default Event