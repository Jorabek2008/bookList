import React from 'react'
import "../styles/home.css"
import circle from "../img/x-circle.png"
import { toast } from 'react-toastify';

function AddBook({addBook}) {
  function toastFunck(){
    toast.success("Sizning kitobingiz muvaffaqiyatli qo'shildi")
    addBook(false)
  }
  return (
    <div className='absolute top-0 left-0 w-full h-[100vh] bg-black opacity-item'>
        <div className="wrapper py-[24px] px-[28px] w-[430px] h-[573px] bg-white mx-auto my-auto mt-7 rounded-[12px] ">
          <div className="flex items-center justify-between mb-[28px]">
            <h1 className='text-[20px]'>Create a book</h1>
            <img className='cursor-pointer' onClick={() => addBook()} src={circle} alt="" />
          </div>
          <div>
            <label className='text-[14px] text-[#151515]'>Title</label>
            <input className='block py-[14px] px-[16px] w-full mb-[10px]' type="text" placeholder='Enter your title' />

            <label className='text-[14px] text-[#151515]'>Author</label>
            <input className='block py-[14px] px-[16px] w-full mb-[10px]' type="text" placeholder='Enter your author' />

            <label className='text-[14px] text-[#151515]'>Cover</label>
            <input className='block py-[14px] px-[16px] w-full mb-[10px]' type="text" placeholder='Enter your cover' />

            <label className='text-[14px] text-[#151515]'>Published</label>
            <input className='block py-[14px] px-[16px] w-full mb-[10px]' type="text" placeholder='Enter your published' />

            <label className='text-[14px] text-[#151515]'>Pages</label>
            <input className='block py-[14px] px-[16px] w-full mb-[10px]' type="text" placeholder='Enter your pages' />
          </div>

          <div className="flex items-center">
            <button className='rounded-[4px] block py-[10px] px-[24px] bg-white border-[#6200EE] w-[300px] text-[#6200EE] border-2 hover:bg-[#6200EE] hover:text-white ease-linear transition-all'>Close</button>
            <button onClick={() => toastFunck()} className='rounded-[4px] block py-[10px] px-[24px] bg-[#6200EE] border-white w-[300px] border-2 text-white hover:bg-white hover:text-[#6200EE] ease-linear transition-all'>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default AddBook