import React, { useState } from 'react'
import AddBook from './AddBook'

function CreateBook({addBook}) {
    
  return (
    <>
    <div className='py-[36px]'>
        <div className="flex items-center justify-between">
            <h1 className='font-bold text-4xl text-white'>You've got <span className='text-[#6200EE]'>7 book</span></h1>
            <div className="flex items-center gap-[24px]">
                <input type="text" className='outline-none w-[300px] border-none py-[14px] px-[16px] rounded-[4px]' placeholder='Enter your name' />
                <button onClick={() => addBook()} className='text-white bg-[#6200EE] py-[10px] px-[24px] rounded-[4px]'>+ Create a book</button>           
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateBook