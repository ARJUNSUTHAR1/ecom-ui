import React from 'react'

const Collection = () => {
  return (
    <div className='collection flex relative overflow-hidden'>
       <div className="left w-1/2 h-screen bg-[url('/src/assets/images/4.jpg')] bg-cover bg-center hover:scale-125 transition-all duration-500"></div>
       <div className="right w-1/2 h-screen bg-[url('/src/assets/images/3.png')] bg-cover bg-center hover:scale-125 transition-all duration-500"></div>

       <div className="collection-text text-white absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/4 leading-8">
       <div className="tagline font-syne font-bold text-[2.2rem] text-white ">MENS COLLECTION</div>
       <p className='font-apercu text-[1rem]'>2024</p>
       </div>
    </div>
  )
}

export default Collection
