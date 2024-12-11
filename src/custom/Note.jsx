import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
const Note = () => {
  return (
    <AlertDialog>
    <AlertDialogTrigger className='text-white border-[1px] px-4 rounded-md py-1'>Note</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogDescription>
                <div className='w-full h-fit flex flex-col justify-center items-center gap-2'>
                  <div className='flex justify-start items-center w-full gap-3'>
                    <div className='w-4 h-4 rounded-full bg-green-500'></div>
                    <div className='border-black w-full font-bold'>
                      This represents that the day has events.
                    </div>
                  </div>

                  <div className='flex justify-start items-center w-full gap-3'>
                    <div className='w-4 h-4 rounded-full bg-zinc-600'></div>
                    <div className='border-black w-full font-bold'>
                      This represents today's date.
                    </div>
                  </div>

                </div>
            </AlertDialogDescription>
            <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>

  )
}

export default Note