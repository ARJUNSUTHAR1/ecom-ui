import React from 'react'
import { imageUrl } from '../constants/url'
import Card from '../components/Card'
const CardsPage = () => {
  return (
    <div className='w-full'>
    
      <div className="font-syne font-bold text-[2rem] text-slate-800 text-center -mb-2 mt-7">NEW ARRIVAL</div>
      <p className='font-apercu text-[1rem] text-slate-600 text-center'>new arrivlas 2024 wear the trands makes you speacial</p>

      {/* cards */}
     
     <div className='w-full grid grid-cols-4 gap-x-5 p-[4rem] place-items-center'>
        {imageUrl.map((url,index)=>(
            <Card key={index} bg_url = {url} />
        ))}
     </div>


    </div>
  )
}

export default CardsPage
