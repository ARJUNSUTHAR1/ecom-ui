import React from 'react'

const Gallery = () => {
  return (
    <div className='h-screen w-full px-[4rem] pb-[5rem]'>
    <div className="w-full h-screen  bg-[url('/src/assets/images/1.png')] bg-cover bg-top rounded-3xl flex items-end justify-center pb-10 ">
      <button className= 'font-syne w-3/5 h-[4rem]  rounded-full  bg-transparent backdrop-blur-sm border-2 border-slate-300 text-white text-[2rem] flex justify-center items-center hover:backdrop-blur-none transition-all duration-500'>Shop now</button>
    </div>
    </div>
  )
}

export default Gallery
