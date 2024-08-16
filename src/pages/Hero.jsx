import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
const Hero = () => {

  useGSAP(()=>{
    gsap.from('.head1 ', {duration: 2, opacity: 0, x: '50%', ease: 'power2.inOut'})
    gsap.from('.head2', {duration: 2, opacity: 0, x : "-50%", ease: 'power2.inOut'})
    gsap.from('.para1', {duration: 2, delay : 0.5, opacity: 0, ease: 'power2.inOut'})
    gsap.from('.btn1', {duration: 2, opacity : 0 , ease: 'power2.inOut'})
  })
  return (
    <div>
      <div className="bg-[url('/src/assets/images/5.png')] w-full h-screen bg-cover bg-center flex justify-between items-end px-[4rem] pb-[4rem]">
      <div className="text w-[30%] text-white leading-[4rem] ">
        <h1 className='head1 text-[4rem] font-syne text-right font-bold'>MENS</h1>
        <h1 className='head2 text-[4rem] font-syne text-left mb-3 font-bold'>WEAR</h1>
         <p className=' para1 text-[1rem] font-apercu text-left leading-5 w-3/4 text-slate-300'>Wear assential that style for men makes you stand out</p>
      </div>

      <button className='btn1 font-syne hover:invert transition-all delay-50 w-[10rem] h-10 rounded-full bg-slate-800 text-white flex justify-center items-center'>shop now</button>
      </div>
    </div>
  )
}

export default Hero
