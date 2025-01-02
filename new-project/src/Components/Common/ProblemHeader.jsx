import React from 'react'
import { TitleCaption } from "../Common/TitleCaption";
import  righttArrow  from "../../assets/rightIcon.png";
import  lefttArrow  from "../../assets/leftIcon.png";

const ProblemHeader = () => {
  return (
    <>
         <div  className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
      <TitleCaption gradient='Solution' className=' text-center lg:text-start '> Problem & </TitleCaption>
      <div className='flex justify-center items-center '>
       

      <button>  <img src={righttArrow} alt="" /> </button>
       <button>  <img src={lefttArrow} alt="" /></button>
     
    </div>
    </div>
    </>
    
  )
}

export default ProblemHeader
