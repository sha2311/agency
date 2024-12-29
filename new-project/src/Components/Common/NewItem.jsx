import { NavbarData } from "../../lib/utils/AllData";

export const NewItem = () => {
  return (
    <>
     {  NavbarData.map((value, index, ) => (
        <a className='text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer' key={index} > {value.label} </a>
    )) }
    </>
      
 
  )
}



