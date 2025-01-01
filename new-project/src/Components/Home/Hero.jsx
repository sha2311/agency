import React from 'react'
import { Container } from '../Common/Container'
import Button from '../Common/Button'


const Hero = () => {
  return (
    <section>
        <Container className='flex justify-center md:justify-end items-center flex-col-reverse md:flex-row gap-5 md:gap-0'>
            <div className='space-y-5 md:space-y-[29px]'>
                <h1 className='font-space-grotesk font-bold text-2xl md:text-4xl lg:text-6xl  md:leading-[60px] lg:leading-[76.56px] text-secondary capitalize max-w-[593px]'>Simplify your real estate document analysis</h1>
                <p className='font-semibold text-base md:text-lg lg:text-xl max-w-[519px]'>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>

                <Button>Get Started</Button>
            </div>
            <div>
                <img className='w-[80%] md:w-[550px] xl:w-auto mx-auto' src='../../../src/assets/hero-side.svg' alt="GoverningDocs Home Hero Image" />
            </div>
        </Container>
    </section>
  )
}

export default Hero
