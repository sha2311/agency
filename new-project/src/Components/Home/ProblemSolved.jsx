import React from 'react'
import { Container } from '../Common/Container'
import ProblemHeader from '../Common/ProblemHeader'
import ProblemSolution from '../Common/ProblemSolution'
import { ProblemData } from "../../lib/utils/AllData";

const ProblemSolved = () => {
  return (
    <section className='pt-36'>
        <Container>
            <ProblemHeader/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-[30px] pt-10'>
              { ProblemData.map((value, index) => (
                <ProblemSolution key={index} {...value} />
              )) }
            </div>
        </Container>
    </section>
  )
}

export default ProblemSolved
