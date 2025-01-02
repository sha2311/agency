import React from 'react'
import { cn } from '../../lib/utils'
import { TextGradient } from './TextGradient'

export const TitleCaption = ({ children, className, gradient }) => {
  return <h1 className={ cn("font-space-grotesk font-bold text-[46px] leading-[58.7px] ", className) }> {children} <TextGradient>{gradient} </TextGradient> </h1>
  
}
