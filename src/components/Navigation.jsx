import React from 'react'
import { FaTint } from 'react-icons/fa';


export default function Navigation() {
  
  return (
    <div className='flex justify-between w-full px-4 py-2' style={{ backgroundColor: '#b22222' }}>
      <div className='flex items-center text-2xl font-bold text-white'>
        <FaTint className='mr-2' />
        Blood Bank Management System
      </div>
    </div>
  )
}
