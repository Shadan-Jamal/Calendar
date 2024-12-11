import React from 'react'
import Note from './Note'
const Header = () => {
  return (
    <div className='w-screen py-2 px-9 flex flex-row justify-around items-center'>
        <div className='p-3'>
            <h1 className='text-white font-serif font-bold text-4xl'>Calendar</h1>
        </div>
        <Note />
    </div>
  )
}

export default Header