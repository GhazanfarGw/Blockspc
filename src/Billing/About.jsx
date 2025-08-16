import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Getting() {
    useEffect (() => {
    Aos.init ();
    }, [])

    return (
        <>
        <div className='justify-center mx-auto items-center duration-300 md:py-32 py-20 bg-[#ffffff]'>
            <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
                <div className='justify-center py-5 gap-16 items-center md:pb-16'>
                    <div className='mx-auto'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium md:text-center mx-auto text-[#1A2B6B]'>
                            How it works
                        </h1>
                        <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3] pt-5'>
                            <div className='border text-center mx-auto px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border text-center mx-auto'>
                                    <p className="md:text-5xl text-2xl py-2 px-3 text-[#232a8d] ">1</p>
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Send bill
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Create a bill from your merchant dashboard and send to your client.
                                </p>
                                <img className="text-center mx-auto pt-4" src="./PnPm8v3l6irCGNgPbHWtLda8Da0.svg" alt="" />
                            </div>
                            <div className='border px-5 py-5 md:py-16 text-center mx-auto md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border text-center mx-auto'>
                                    <p className="md:text-5xl text-2xl py-2 px-3 text-[#232a8d]">2</p>
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Payment
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Your customer pays the Blocksphere invoice at a locked-in exchange rate.
                                </p>
                                <img className="text-center mx-auto pt-4" src="./AZAjIoMUkiYUjEdc5ihv9pthyzs.svg" alt="" />
                            </div>
                            <div className='border px-5 py-5 md:py-16 text-center mx-auto md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border text-center mx-auto'>
                                    <p className="md:text-5xl text-2xl py-2 px-3 text-[#232a8d]">3</p>
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Conversion
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                   Blocksphere converts the customer’s payment into your local currency.
                                </p>
                                <img className="text-center mx-auto pt-4" src="./55BBCisQ2LvqyBKsHxISxpy6zpU.svg" alt="" />
                            </div>
                            <div className='border px-5 py-5 md:py-16 text-center mx-auto md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] hover:cursor-wait'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border text-center mx-auto'>
                                    <p className="md:text-5xl text-2xl py-2 px-3 text-[#232a8d]">4</p>
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Transfer
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Blocksphere initiates a bank settlement to you the next business day.
                                </p>
                                <img className="text-center mx-auto pt-4" src="./Gehxffa4UkvULOkncGQIx0n4q2w.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Getting;