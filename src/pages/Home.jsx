import React, { useState } from 'react'
import "../styles/home.css"
import img from "../img/404Img.png"
import Admin from './Admin'

function Home() {
  const [next,setNext] = useState(false)
  function onButton(){
    setNext(true)
  }
  return (
    <div>
    {next ? <Admin /> : (
      <div className='wrapper-home'>
        <div className="container-img">
          <img className='bg-center bg-no-repeat bg-cover m-auto w-[720px] h-[476px]' src={img} alt="" />
          <div className="flex mx-auto max-w-[340px] justify-between mt-9">
            <button onClick={() => onButton()} className='text-white px-[24px] py-[10px] bg-[#6200EE] hover:bg-white hover:text-[#6200EE] transition-all ease-linear rounded-[4px]'>Go Home Page</button>
            <button onClick={() => location.reload()} className='text-[#6200EE] rounded-[4px] border-2 hover:bg-[#6200EE] hover:text-white transition-all ease-linear border-[#6200EE] bg-white px-[24px] py-[10px]'>Reload Page</button>
          </div>      
        </div>
      </div>
    )}
    </div>
  )
}

export default Home