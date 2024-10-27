import React from 'react'
import './custom-loader.css'
function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='Spinner '></div>
      <p className='text-blue-950 text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
