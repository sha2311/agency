import Logo from './Logo'
import { NavbarData } from '../../lib/utils/AllData'

export const MobileMenu = ({toggleMenu}) => {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
      <div className=' flex justify-between items-center pb-6 '>
        <Logo/>
        <button onClick={toggleMenu}  className='text-2xl self-end text-black '> &times; </button>
        </div>
        <div className='space-y-4 '>
        { NavbarData.map((value, index) => (
            <a className='block text-lg font-nunito-sans text-accent hover:text-primary transition-colors duration-150 cursor-pointer' key={index} > {value.label} </a>
        )) }
      </div>
      </div>

     

  )
}


