import { cn } from "../lib/utils"


const Button = ({ children, className }) => {
  return (
   <div>
     <button className= { cn(
     " py-3 sm:py-4 px-3.5 sm:px-[25px] text-white rounded-full font-bold bg-gradient-primary opacity-90 hover:opacity-100 transition-all delay-150 text-xs sm:text-base", className
       
     ) } > {children} </button>
   </div>
  )
}

export default Button
