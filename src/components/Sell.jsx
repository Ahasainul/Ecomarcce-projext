import React from 'react'
import Container from './Container'
import Image from './Image'
import Button from './Button'
import Logos from '../assets/treem.png'
import clock from '../assets/clock.png'
import lamp from '../assets/03.png'



const Sell = () => {
    return (
        <>
            <Container className='py-[100px] flex'>
                <div className="w-[50%] relative">
                    <div className="">
                        <Image className='' src={Logos} alt='logo.png' />
                        <div className=" absolute left-[65px] bottom-[20px] ">
                            <h1 className='text-[49px] font-bold'>Phones Sale</h1>
                            <p className='pt-[33px] text-[16px] text-ptag pb-[40px] flex items-center'>Up to <span className='font-bold text-black text-[40px] px-[5px]'>30%</span> sale for all furniture items!</p>
                            <Button className='text-white px-[50px] py-[15px] text-[16px] font-bold hover:bg-white hover:text-black   hover:shadow-2xl bg-black' btnName='Shop Now' />
                        </div>

                    </div>

                </div>
                <div className="w-[50%] space-y-6">
                    <Image className='w-full' src={clock} alt='clock.png'/>
                    <Image className='w-full' src={lamp} alt='03.png'/>
                </div>
            </Container>



        </>
    )
}

export default Sell