import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Anywhere() {
    useEffect (() => {
    Aos.init ();
    }, [])

    return (
        <>
        <div className='justify-center mx-auto items-center duration-300 md:py-32 py-20 bg-[#F0F5FF]'>
            <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
                <div className='justify-center py-5 gap-16 items-center md:pb-16'>
                    <div className='mx-auto'>
                        <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-consultation-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Block Sphere Checkout for iOS and Android
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Accept blockchain payments across multiple devices with the Block Sphere Checkout app.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-proposal-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Never touch crypto
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Block Sphere shields you from the price volatility of Bitcoin and other cryptocurrencies. You get every dollar or euro of what you charge, minus a low transaction fee.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                    <img className='py-4 px-3' src="icons8-game-plan-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Quick bank settlement
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Block Sphere can settle funds via local bank transfer (ACH, SEPA, FPS...)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Anywhere;