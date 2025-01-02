import React from 'react'
import { TitleCaption } from '../Common/TitleCaption'
import { Container } from '../Common/Container'
import {partners} from "../../lib/utils/AllData";

const Patners = () => {
  return (
    <section>
      <Container className='bg-[#E6F9FD] rounded-[20px] max-w-[1200px]  py-[50px]'>
          <TitleCaption className='text-center' gradient='Partners'>Our</TitleCaption>

          <div className='flex justify-center items-center flex-wrap gap-x-7 gap-y-7 pt-10'>
          { partners.map(({src, alt}, i) => (
                  
                  <div key={i}  className='flex justify-center items-center bg-white border border-[#D6D6D6] w-[274px] h-[101px] rounded-xl '>
                    <img src={src} alt={alt}/>  
                  </div>

          ))}
               
          </div>
      </Container>
    </section>
  )
}

export default Patners