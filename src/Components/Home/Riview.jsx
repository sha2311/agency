import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { TitleCaption } from '../Common/TitleCaption'
import RiviewCard from '../Common/RiviewCard'
import { reviews } from "../../lib/utils/AllData";
import Star  from "../../assets/star.svg";
import { cn } from '../../lib/utils';




const Riview = () => {
  const [active, setActive] = useState(1)
  const activeRiview= reviews[active]
  return (
    <>
    <section className=' w-full bg-[#F6F6F6] py-10 lg:py-20 my-[50px] sm:my-[80px] lg:my-[100px] xl:my-[150px]'>
        <Container>
            
            <TitleCaption gradient='Our Client' className='text-center'>
                Reviews From
                 </TitleCaption>
            
                <div className='pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]'>

                      <div className='flex gap-5 w-full'>
                          <div className='bg-[#E2DED8] w-[5px] h-fit rounded-[20px] flex flex-col justify-between'>
                           <div className='flex flex-col justify-between gap-[15px]'>
                            {Array.from(Array(3).keys()).map((el) => ( 
                              <div key={el}
                               className={cn(
                                'w-[5px] h-[92px] bg-gradient-primary rounded-[20px]',
                                active !== el && 'bg-transparent'
                               )}>
                                
                               </div>
                              ))}

                           </div>
                          </div>
                  

                    <div className='space-y-[15px] flex-grow'>
                     { reviews.map((value, indexy) => (
                        <RiviewCard key={indexy} className='flex flex-col justify-between w-full h-fit' {...value } onclick={()=> setActive(indexy)} active={active === indexy} />
                     )) }
                    </div>
                    </div>
                    <div className=' space-y-3.5 sm:space-y-5 lg:space-y-[30px] w-full pl-10 md:pl-0 '>
                        <h3 className='font-bold text-lg sm:text-xl lg:text-[30px]'> {activeRiview.review.title} </h3>
                        <div className='flex justify-start items-center gap-[5px]'>
                          {Array.from(Array(activeRiview.review.stars).keys()).map((el)=> (<img src={Star} key={el} alt="star" />))}
                        </div>
                        <p className=' text-sm font-nunito-sans sm:text-base text-accent max-w-[500px]'> {activeRiview.review.details} </p>
                    </div>
                </div>
            
        </Container>
    </section>
    </>
  )
}

export default Riview