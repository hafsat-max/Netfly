import React from 'react'
import { Bin } from './bin'
import { Pencil } from './pencil'

const Todoitem = () => {
  return (
    <div className='flex items-center justify-between p-3 w-[40%]  rounded-lg mx-auto border border-double border-[#190281]'>
        <p>Name cannot be blank</p>

        <div className='flex gap-2 '>
            <Pencil />
            <Bin className='hover:bg-[#530000] hover:text-white' />
        </div>
    </div>
  )
}

export default Todoitem