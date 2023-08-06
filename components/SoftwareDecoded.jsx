import Image from 'next/image'
import React from 'react'

const SoftwareDecoded = () => {
  return (
    <div className='bg-white px-5'>

        <div className="flex  justify-between  md:justify-around  items-center py-6">
            <p className=' text-xl md:text-2xl text-center mt-3'>
            85,000 companies have already built apps with Glide.
            </p>
            <div className='company-icons flex justify-between items-center'>
            <div><Image src="/assets/images/oysterLogo.svg" width="90" height="23" /></div>
            <div><Image src="/assets/images/lowes.svg" width="90" height="23" /></div>
            <div><Image src="/assets/images/whirlpool.svg" width="90" height="23" /></div>
            <div><Image src="/assets/images/pga.svg" width="90" height="23" /></div>
            <p><Image src="/assets/images/zapier.svg" width="90" height="23" /></p>
            <div><Image src="/assets/images/dragon.svg" width="90" height="23" /></div>
            </div>
        </div>

        <div className='text-black  mt-16 text-center px-12 py-32'>
        <h1 className='header_text text-5xl sm:text-6xl font-bold leading-[1.20] '>Software development decoded</h1>
        <p className='mt-6 text-2xl max-w-3xl mx-auto'>Glide gives you the powers of a developer and a designer. Create remarkable tools to solve the business problems you thought you never could.</p>
        <p className='mt-5'><button className='signUp-btn'>Start for free</button></p>
    </div>
    </div>
  )
}

export default SoftwareDecoded