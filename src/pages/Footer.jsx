import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between bg-slate-800 px-[5rem] py-5 mt-[5rem] gap-10 '>
        <div className='flex justify-between'>
      <div className="left-sec w-2/5">
        <h2 className='font-syne font-bold text-start text-white text-[1.5rem]'>Brand</h2>
        <p className='font-apercu text-white text-start '>tag line of your brand</p>
      </div>
      <div className="right-sec w-3/5 flex justify-between">
        <div>
        <h2 className='text-white text-start font-syne font-bold text-[1.5rem]'>Corporate Info</h2>
        <ul>
          <li className='text-slate-300 text-start font-apercu list-none '>About us</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Contact Us</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Our team</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Compliance</li>
        </ul>
        </div>

        <div>
        <h2 className='text-white text-start font-syne font-bold text-[1.5rem]'>Policy</h2>
        <ul>
          <li className='text-slate-300 text-start font-apercu list-none'>Returns and Refund</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Liences</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Terms</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Report Abuse</li>
          <li className='text-slate-300 text-start font-apercu list-none'>System Status</li>
        </ul>
        </div>

        <div>
        <h2 className='text-white text-start font-syne font-bold text-[1.5rem]'>Help & Support</h2>
        <ul>
          <li className='text-slate-300 text-start font-apercu list-none'>FAQ</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Contact Us</li>
          <li className='text-slate-300 text-start font-apercu list-none'>Terms & Conditions</li>
        </ul>
        </div>
        </div>
      </div>


      <p className='text-slate-300 text-center font-syne'>all rights reseverd by the brand</p>
    </div>
  )
}

export default Footer
