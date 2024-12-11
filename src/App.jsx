import React from 'react'
import Header from './custom/Header'
import Calendar from './custom/Calendar'

const App = () => { 
  return (
    <div className='w-screen h-[100dvh] bg-zinc-700 overflow-x-hidden'>
      <Header />
      <Calendar />
    </div>
  )
}

export default App