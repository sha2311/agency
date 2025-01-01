import React from 'react'
import { TitleCaption } from "../Common/TitleCaption";

const ProblemHeader = () => {
  return (
    <div  className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
      <TitleCaption gradient='Solution'> Problem & </TitleCaption>
    </div>
  )
}

export default ProblemHeader
