import React from 'react'
import { Container } from './Components/Common/Container'
import Button from './Components/Common/Button'

const Simplyfy = () => {
  return (
    <section className='pt-[50px] sm:pt-[80px] lg:pt-[100px] xl:pt-[150px] px-2.5'>
        <Container className='max-w-[1180px] rounded-[20px] py-10 md:py-14  bg-gradient-primary flex flex-col md:flex-row justify-between items-center gap-5 md:gap-2.5'>
            <div className=' space-y-5 md:space-y-[30px] ' >
                <h1 className=' text-2xl md:text-[35px] lg:text-[46px] font-bold font-space-grotesk sm:max-w-[500px] leading-[35px] md:leading-[45px] lg:leading-[64.4px] lg:max-w-[566px] text-white text-center sm:text-start'>Ready to Simplify Your Document Management?</h1>
                <p className='text-white text-sm md:text-base font-bold max-w-[500px]'>Sign up today and experience the power of AI-driven legal documentation.</p>
            </div>
            <Button className='bg-white text-secondary min-w-fit'>
            Get Started Now
            </Button>
        </Container>
    </section>
  )
}

export default Simplyfy 