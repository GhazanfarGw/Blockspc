import React from 'react';

export default function Dashboard() {
  return (
    <>
        <div className='protecting duration-500 overflow-hidden mx-auto items-center h-[45rem] border-b border-opacity-30'>
            <div className='block md:hidden lg:hidden mx-3'>
                <video 
                    class="" 
                    loop autoPlay muted playsinline>
                    <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 mx-auto max-w-screen-2xl w-full md:px-10 px-5'>
                <div className=''>
                    <div className='md:top-1/4 md:px-10 px-5 absolute pt-5 md:pt-0 max-w-screen-xl mx-auto'>
                        <div className='second text-left'>
                            <h1 className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#1A2B6B] font-medium'>
                                Blocksphere digital <br className='hidden md:block lg:block'/> asset consultancy
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <p className='text-[#000000] text-left leading-normal'> 
                                We specialize in safeguarding your digital assets and ensuring that all blockchain-related activities are secure and compliant.
                            </p>
                            <a 
                                href="#about" className="fourth md:mt-10 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#0847F7] relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center text-center flex rounded-sm">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className='max-w-screen-lg mx-auto pt-32 hidden lg:block md:block'>
                    <video 
                        class="justify-center mx-auto max-w-lg items-center" 
                        loop autoPlay muted playsinline>
                        <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </>
  )
}