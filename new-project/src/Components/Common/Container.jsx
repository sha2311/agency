import { cn } from '../../lib/utils'


export const Container = ({ children, className }) => {
  return (
    <div className={ cn("w-full max-w-screen-xl mx-auto  px-1.5 sm:px-5 xl:px-[26px]", className) }> {children} </div>
  )
}
