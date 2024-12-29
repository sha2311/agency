import React from 'react'
import { Container } from '../Common/Container'
import { NewItem } from '../Common/NewItem'
import { FooterData } from '../../lib/utils/AllData'

const Footer = () => {
  return (
    <footer className='pt-5 lg:pt-24'>
      <Container>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2.5 px-[30px] py-5'>
          <h1 className='font-space-grotesk text-[20px] sm:text-2xl lg:text-3xl xl:text-4xl font-bold'> AI GoverningDocs </h1>

          <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
            <NewItem/>
          </div>

        <div className='flex justify-center items-center gap-2.5'>
            { FooterData.map(({img, link }, index) => (
                  <a href={link} key={index} target='_blank'>
                    <img className='size-[36px]' src={img} alt="" />
                  </a>
            ))}
        </div>
        </div>
        <div className="footer-border-top border-t border-transparent mt-[20px] md:mt-[50px] lg:mt-[106px]">
          <p className="text-center text-sm sm:text-lg leading-[18px] text-[#111111] py-5 border-t ">
            Ai GoverningDocs 2024. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer