import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { TitleCaption } from '../Common/TitleCaption'
import FaqCard from '../Common/FaqCard'
import { faqs } from "../../lib/utils/AllData";
import FaqBg  from "../../assets/faq-bg-line.svg";


const Faq = () => {
    const [active , setActive] =  useState(null)

    const handleFaq = (index) => setActive(index === active ? null : index) 
    
  return (

    <section className='w-full mt-[50px] sm:mt-[80px] lg:mt-[100px] xl:mt-[150px] relative'>
        <Container className='max-w-[982px]'>
            <TitleCaption className='text-center' gradient='Asked Questions' >Frequently</TitleCaption>

            <div className='pt-10 space-y-5 relative z-10'>
                {faqs.map((faq,index) => (
                    <FaqCard key={index} {...faq} onClick={()=> handleFaq(index) } isActive={active===index} />
                ))}
            </div>
        </Container>
        <img src={FaqBg} className='absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%] h-[590px] !w-[1713px] ' alt="Bg-Line" />
    </section>
  )
}

export default Faq