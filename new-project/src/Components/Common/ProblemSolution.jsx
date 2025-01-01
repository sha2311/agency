import React from 'react'
const ProblemSolution = ( { img, title, desc1, desc2 } ) => {
  return (
    <>
        <div className='w-[272px] h-[349px] rounded-[20px] shadow-card p-5 space-y-5 hover:bg-primary transition-colors duration-300 cursor-pointer group'>
            <div className='bg-gradient-primary size-[58px] rounded-full flex justify-center items-center'>
                <img src={img} alt="" />
            </div>
              <h1 className='group-hover:text-white font-bold text-lg leading-none text-secondary'> {title} </h1>
            <div className='group-hover:text-white text-accent space-y-2.5'>
                <p> {desc1} </p>
                { desc2 && <p>{desc2}</p> }
            </div>
        </div>
    </>
  )
}

export default ProblemSolution